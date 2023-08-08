import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Theme } from '../../types/themes';

export const useThemes = (): SWRResponse<Theme[], Error> => {
  return useSWR(
    '/themes',
    (endpoint) =>
      apiClient
        .apiGet<{ themes: Theme[] }>(endpoint)
        .then((result) => result.data.themes),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
