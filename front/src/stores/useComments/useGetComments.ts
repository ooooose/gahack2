import useSWR, { SWRResponse } from 'swr';
import { Comment } from '../../types/comments';
import { apiClient } from '../../utils/api-client';

type Props = {
  pictureId: number;
};

export const useGetComments = ({
  pictureId,
}: Props): SWRResponse<Comment[]> => {
  return useSWR(`/pictures/${pictureId}/comments`, (endpoint) =>
    apiClient.apiGet<Comment[]>(endpoint).then((result) => result.data),
  );
};
