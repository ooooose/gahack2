import { apiClient } from '../../utils/api-client';
import useSWRMutation from 'swr/mutation'

type postLikeType = {
  pictureId: number,
}

export const postLike = ({ pictureId }: postLikeType) => {
  return useSWRMutation(
    '/likes',
    (endpoint) =>
      apiClient.apiPost(endpoint, { picture_id: pictureId }),
  );
};