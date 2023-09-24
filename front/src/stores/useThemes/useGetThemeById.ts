import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Theme } from '../../types/themes';

export const useGetThemeById = (themeId: string): SWRResponse<Theme, Error> => {
  return useSWR(
    `/themes/${themeId}`,
    (endpoint) =>
      apiClient.apiGet<Theme>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
