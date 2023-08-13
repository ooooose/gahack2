import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { User } from '../../types/users';

export const useGetProfile = (config: {
  headers: {
    authorization: string;
  };
}): SWRResponse<User | undefined> => {
  return useSWR(
    '/profile',
    (endpoint) =>
      apiClient.apiGet<User>(endpoint, config).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
