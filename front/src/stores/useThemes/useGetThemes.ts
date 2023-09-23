import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Theme } from '../../types/themes';

export const useGetThemes = (): SWRResponse<Theme[], Error> => {
  return useSWR(
    '/themes',
    (endpoint) =>
      apiClient.apiGet<Theme[]>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
