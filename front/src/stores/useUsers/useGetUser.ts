import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { User } from '../../types/users';

export const useGetUser = ({
  userId,
}: {
  userId: string;
}): SWRResponse<User | undefined> => {
  return useSWR(
    userId ? `${process.env.REACT_APP_HOST}/users/${userId}` : null,
    (endpoint) =>
      apiClient.apiPost<User>(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
