import useSWR, { SWRResponse } from 'swr';
import { apiClient } from '../../utils/api-client';
import { User } from '../../types/users';

type ConfigType = {
  headers: {
    authorization: string;
  }
}

export const getProfile = (config: ConfigType): SWRResponse<User[] | undefined> => {
  return useSWR(
    `${process.env.REACT_APP_HOST}/profile`,
    (endpoint) =>
      apiClient.apiPost<User[]>(endpoint, config).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};