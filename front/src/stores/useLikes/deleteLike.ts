import useSWR from 'swr';
import { apiClient } from '../../utils/api-client';
import { getAuth } from 'firebase/auth';

type postLikeType = {
  pictureId: number,
}

export const deleteLike = ({ pictureId }: postLikeType) => {
  const auth = getAuth();
  const idToken = auth.currentUser?.getIdToken();
  const config = {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  };
  return useSWR(
    `/likes/${pictureId}`,
    (endpoint) =>
      apiClient.apiDelete(endpoint, config).then((result) => result.data),
  );
};