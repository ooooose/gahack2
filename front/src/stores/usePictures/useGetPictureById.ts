import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Picture } from '../../types/pictures';

export const useGetPictureById = (pictureId: string): SWRResponse<Picture, Error> => {
  return useSWR(
    `/pictures/${pictureId}`,
    (endpoint) =>
      apiClient.apiGet<Picture>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
