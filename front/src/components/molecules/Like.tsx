import React, { useCallback } from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { Picture } from "../../types/pictures";
import LikeButton from "../atoms/LikeButton";

const Like = ({ picture }: { picture: Picture }) => {
  const currentUser = useAuthUserState();

  const generateParams = useCallback(() => {
    const likeParams = {
      pictureId: picture.id,
    };
    return likeParams;
  }, [picture]);

  return (
    <>
      { currentUser.authUserType !== null ? (
          <>
            <LikeButton picture={picture} generateParams={generateParams} />
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