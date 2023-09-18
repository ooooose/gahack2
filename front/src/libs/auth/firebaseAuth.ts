import { useEffect, useState } from 'react';
import { signOut as _signOut, User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';

export const useFirebaseAuth = () => {
  const setCurrentUser = useAuthUserMutators();
  const currentUser = useAuthUserState();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const nextOrObserver = async (user: User | null) => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    setCurrentUser.setAuthUser({
      name: user.displayName || '',
      avatar: user.photoURL || '',
      description: '',
      uid: user.uid,
      twitterName: '',
    });
    setIsLoading(false);
  };

  const logout = async () => {
    return await _signOut(auth)
      .then(() => {
        setCurrentUser.setAuthUser(null);
        console.log('signed out!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  return {
    currentUser,
    logout,
    isLoading,
  };
};
