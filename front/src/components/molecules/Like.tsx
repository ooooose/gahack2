import React from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { Picture } from "../../types/pictures";
import { Box } from "@chakra-ui/react";
import { useToggleLike } from "../../stores/useLikes/useToggleLike";
import { useGetLikes } from "../../stores/useLikes/useGetLikes";
import LikeButton from "../atoms/LikeButton";

const Like = ({ picture }: { picture: Picture }) => {
  const currentUser = useAuthUserState();
  const { data } = useGetLikes({ pictureId: picture.id });
  if (!data) return <div>Loading...</div>;
  
  return (
    <>
      { currentUser.authUserType !== null ? (
          <Box>
            <LikeButton picture={picture} isLiked={data?.liked} likes={data?.likes} likeId={data?.likeId} />
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