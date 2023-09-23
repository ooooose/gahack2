import { apiClient } from '../../utils/api-client';
import { Comment } from '../../types/comments';

type Props = {
  pictureId: number;
  comment: Comment;
  params: {
    picture_id: number;
  };
};

export const useDeleteComment = async ({
  pictureId,
  comment,
  params,
}: Props) => {
  return await apiClient
    .apiDelete(`/pictures/${pictureId}/comments/${comment.id}`, params)
    .then((response) => response);
};
