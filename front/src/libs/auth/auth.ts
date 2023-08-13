import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/initFirebase';
import { NavigateFunction } from 'react-router-dom';
import { AuthUser } from '../../types/users';

type signInWithGoogleMutator = {
  setAuthUser: (authUserType: AuthUser | null) => void;
};

export const loginWithGoogle = async (
  navigate: NavigateFunction,
  setCurrentUser: signInWithGoogleMutator,
) => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  if (result) {
    setCurrentUser.setAuthUser({
      name: result.user.displayName || '',
      avatar: result.user.photoURL || '',
      description: '',
      uid: result.user.uid,
      twitterName: '',
    });
    navigate('/pictures');
    return result.user;
  }
};
