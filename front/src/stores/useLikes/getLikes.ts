import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';

type LikeType = {
  liked: boolean;
  likes: number;
}

export const getLikes = (): SWRResponse<LikeType> => {
  return useSWR(
    '/pictures/likes',
    (endpoint) =>
      apiClient.apiGetWithAuth<LikeType>(endpoint).then((result) => result.data),
  );
};