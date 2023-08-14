import useSWRMutation from 'swr/mutation'
import { apiClient } from '../../utils/api-client';

type postLikeType = {
  pictureId: number;
}

export const deleteLike = ({ pictureId }: postLikeType) => {
  return useSWRMutation(
    `/likes/${pictureId}`,
    (endpoint) =>
      apiClient.apiDelete(endpoint),
  );
};