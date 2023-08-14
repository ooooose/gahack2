import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Like } from '../../types/likes';

export const getLikes = (): SWRResponse<Like[] | undefined> => {
  return useSWR(
    '/likes',
    (endpoint) =>
      apiClient.apiGet<Like[]>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};