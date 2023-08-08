import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { Theme } from '../../types/themes';

export const useThemeByThemeId = ({
  themeId,
}: {
  themeId: number;
}): SWRResponse<Theme, Error> => {
  return useSWR(
    themeId ? `/themes/${themeId}` : null,
    (endpoint) =>
      apiClient
        .apiGet<{ theme: Theme }>(endpoint)
        .then((result) => result.data.theme),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
