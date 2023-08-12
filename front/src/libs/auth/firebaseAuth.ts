import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getProfile } from '../../stores/useAuthUser/getProfile';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';
import { auth } from '../firebase/initFirebase';

export const useFirebaseAuth = () => {
  const navigate = useNavigate();
  const currentUser = useAuthUserMutators();
  const nextOrObserver = async (authUser: User | null) => {
    if (!authUser) {
      return;
    }
    const idToken = await authUser.getIdToken();

    const config = {
      headers: {
        authorization: `Bearer ${idToken}`,
      },
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/authentication`,
        null,
        config,
      );

      if (res.status !== 200) {
        throw new Error('login error');
      }
      const { data: user } = getProfile(config);
    } catch (error: any) {
      console.error(`ユーザー情報の取得に失敗しました\n${error.messages}`);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unSub = onAuthStateChanged(auth, nextOrObserver);

    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return {
  //   currentUser,
  // };
};
