import React, { useCallback, useState } from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { postLike } from "../../stores/useLikes/postLike";

const Like = ({ pictureId }: { pictureId: number }) => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const currentUser = useAuthUserState();

  const generateParams = useCallback(() => {
    const likeParams = {
      pictureId: pictureId,
    };
    return likeParams;
  }, [pictureId]);

  const handleCreateLike = () => {
    const params = generateParams(); 
    try {
      const { data: res } = postLike(params)
      if (res) {
        setIsLike(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      { currentUser.authUserType !== null ? (
          <>
            <Text>いいねできます</Text>
          </>
        ) : (
          <>
            <Text>いいねできません</Text>
          </>
        )
      }
    </>
  )
}

export default Like;