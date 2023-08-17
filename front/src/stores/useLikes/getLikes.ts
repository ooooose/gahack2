import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';

type LikeType = {
  likeId: number;
  liked: boolean;
  likes: number;
}
type props = {
  pictureId: number;
}

export const getLikes = ({ pictureId }: props): SWRResponse<LikeType> => {
  return useSWR(
    `/pictures/${pictureId}/likes`,
    (endpoint) =>
      apiClient.apiGetWithAuth<LikeType>(endpoint).then((result) => result.data),
  );
};