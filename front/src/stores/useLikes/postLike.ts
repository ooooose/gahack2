import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { getAuth } from 'firebase/auth';

type postLikeType = {
  pictureId: number,
}

export const postLike = ({ pictureId }: postLikeType) => {
  const auth = getAuth();
  const idToken = auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return useSWR(
    '/likes',
    (endpoint) =>
      apiClient.apiPost(endpoint, { picture_id: pictureId }, config).then((result) => result.data),
  );
};