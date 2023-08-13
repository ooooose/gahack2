import axios from 'axios';
import { useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { useGetProfile } from '../../stores/useUsers/useGetProfile';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';
import { auth } from '../firebase/initFirebase';

export const useFirebaseAuth = () => {
  const currentUser = useAuthUserMutators();
  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {   
      const token = await authUser.getIdToken();
  
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
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
        const { data: user } = useGetProfile(config);
        if (user) {
          currentUser.setAuthUser({
            authChecked: true,
            name: user.name || '',
            avatar: user.avatar || '',
            description: user.description,
            uid: authUser.uid,
            twitterName: user.twitterName,
          })
        }
      } catch (error: any) {
        console.error(`ユーザー情報の取得に失敗しました\n${error.messages}`);
      }
    } else {
      currentUser.setAuthUser(null);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  return {
    currentUser,
  };
};
