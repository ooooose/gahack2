import React, { useCallback } from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { Picture } from "../../types/pictures";
import { Box } from "@chakra-ui/react";
import { useToggleLike } from "../../stores/useLikes/useToggleLike";
import { getLikes } from "../../stores/useLikes/getLikes";
import LikeButton from "../atoms/LikeButton";

const Like = ({ picture }: { picture: Picture }) => {
  const currentUser = useAuthUserState();
  const { data } = getLikes({ pictureId: picture.id });
  if (!data) return <div>Loading...</div>;

  const toggleProps = {
    isLiked: data?.liked,
    likeId: data?.likeId,
    pictureId: picture.id,
  }
  const { trigger, isMutating } = useToggleLike(toggleProps);
  return (
    <>
      { currentUser.authUserType !== null ? (
          <Box>
            <LikeButton trigger={() => trigger()} isMutating={isMutating} isLiked={data?.liked} likes={data?.likes} />
          </Box>
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