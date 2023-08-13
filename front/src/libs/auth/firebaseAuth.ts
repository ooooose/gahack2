import { useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { AuthUser } from '../../types/users';
import { useAuthUserState } from '../../globalStates/atoms/authUserState';

type authUserMutator = {
  setAuthUser: (authUserType: AuthUser | null) => void;
};

export const useFirebaseAuth = (setCurrentUser: authUserMutator) => {
  const currentUser = useAuthUserState();
  const nextOrObserver = async (user: User | null) => {
    if (!user) {
      return;
    }

    setCurrentUser.setAuthUser({
      name: user.displayName || '',
      avatar: user.photoURL || '',
      description: '',
      uid: user.uid,
      twitterName: '',
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);
  console.log(currentUser);
  return {
    currentUser,
  };
};
