import React from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { Picture } from "../../types/pictures";
import { Box } from "@chakra-ui/react";
import { useToggleLike } from "../../stores/useLikes/useToggleLike";
import { useGetLikes } from "../../stores/useLikes/useGetLikes";
import LikeButton from "../atoms/LikeButton";
import { AuthUser } from "../../types/users";

type Props = {
  picture: Picture;
  currentUser: AuthUser | null;
}

const Like = ({ picture, currentUser }: Props) => {
  const { data } = useGetLikes({ pictureId: picture.id });
  if (!data) return <div>Loading...</div>;
  
  return (
    <>
      { currentUser !== null ? (
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