import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Picture } from '../../types/pictures';

export const usePictures = (): SWRResponse<Picture[] | undefined> => {
  return useSWR(
    '/pictures',
    (endpoint) =>
      apiClient.apiGet<Picture[]>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
