import useSWRMutation from 'swr/mutation'
import { apiClient } from '../../utils/api-client';

type likeType = {
  id?: string;
}

export const deleteLike = ({ id }: likeType) => {
  return useSWRMutation(
    `/likes/${id}`,
    (endpoint) =>
      apiClient.apiDelete(endpoint),
  );
};