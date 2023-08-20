import useSWRMutation, { SWRMutationResponse } from 'swr/mutation';
import { apiClient } from '../../utils/api-client';

type props = {
  isLiked: boolean;
  likeId: number;
  params: {
    picture_id: number;
  };
};

export const useToggleLike = ({
  isLiked,
  likeId,
  params,
}: props): SWRMutationResponse => {
  return useSWRMutation(
    isLiked ? `/likes/${likeId}` : '/likes',
    (endpoint: string) =>
      apiClient
        .apiPostOrDelete(endpoint, isLiked, params)
        .then((response) => response),
  );
};
