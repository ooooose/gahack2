import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CommentModal from "../atoms/CommentModal";
import { Picture } from "../../types/pictures";
import { AuthUser } from "../../types/users";
import { useGetComments } from "../../stores/useComments/useGetComments";

type Props = {
  picture: Picture;
  currentUser: AuthUser | null;
}


const Comment = ({ picture, currentUser }: Props) => {
  const { data: comments } = useGetComments({pictureId: picture.id})
  if (!comments) return <div>Loading...</div>;
  return (
    <>
      {currentUser !== null ? (
        <Box>
          <CommentModal
            comments={comments}
          />
        </Box>
      ) : (
        <>
          <Text>いいねできません</Text>
        </>
      )}
    </>
  )
}

export default Comment