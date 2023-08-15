import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Picture } from '../../types/pictures';

export const getLikes = (): SWRResponse<Picture[] | undefined> => {
  return useSWR(
    '/pictures/likes',
    (endpoint) =>
      apiClient.apiGetWithAuth<Picture[]>(endpoint).then((result) => result.data),
    {
      keepPreviousData: true
    }
  );
};