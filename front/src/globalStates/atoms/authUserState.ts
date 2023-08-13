import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthUser } from '../../types/users';

type UserType = AuthUser | null;
type AuthUserType = {
  authUserType: UserType;
};

const authUserRecoilState = atom<AuthUserType>({
  key: 'authUserState',
  default: {
    authUserType: {
      authChecked: false,
      avatar: '',
      description: '',
      name: '',
      twitterName: '',
      uid: '',
    },
  },
});

export const useAuthUserState = () => {
  return useRecoilValue(authUserRecoilState);
};

export const useAuthUserMutators = () => {
  const setState = useSetRecoilState(authUserRecoilState);

  const setAuthUser = useCallback(
    (authUserType: UserType) => setState({ authUserType }),
    [setState],
  );

  return { setAuthUser };
};
