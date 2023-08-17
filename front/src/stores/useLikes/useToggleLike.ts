import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { apiClient } from '../../utils/api-client';

type props = {
  isLiked: boolean;
  pictureId: number;
  likeId: number;
};

export const useToggleLike = ({
  isLiked,
  pictureId,
  likeId,
}: props): SWRMutationResponse => {
  return useSWRMutation(
    isLiked ? `/likes/${likeId}` : `/likes/${pictureId}`,
    (endpoint) =>
      apiClient.apiPostOrDelete(endpoint, isLiked).then((response) => response),
  );
};
