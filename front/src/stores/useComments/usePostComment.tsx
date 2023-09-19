import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { apiClient } from '../../utils/api-client';

type Props = {
  pictureId: number;
  params: {
    picture_id: number;
    body: string;
  };
};

export const usePostComment = ({
  pictureId,
  params,
}: Props): SWRMutationResponse => {
  return useSWRMutation(`/pictures/${pictureId}/comments`, (endpoint: string) =>
    apiClient.apiPost(endpoint, params).then((response) => response),
  );
};
