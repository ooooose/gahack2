import React, { useCallback } from "react";
import { useAuthUserState } from "../../globalStates/atoms/authUserState";
import Text from "../atoms/Text";
import { Picture } from "../../types/pictures";
import { Box } from "@chakra-ui/react";
import LikeButton from "../atoms/LikeButton";
import { getLikes } from "../../stores/useLikes/getLikes";

const Like = ({ picture }: { picture: Picture }) => {
  const currentUser = useAuthUserState();
  const { data, isLoading } = getLikes();
  const isLikedPicture = data && data.find((pic) => pic.id === picture.id);
  
  const generateParams = useCallback(() => {
    const likeParams = {
      pictureId: picture.id,
    };
    return likeParams;
  }, [picture]);
  return (
    <>
      { currentUser.authUserType !== null ? (
          <Box>
            <LikeButton picture={picture} isLikedPicture={isLikedPicture} generateParams={generateParams}  />
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