import { useEffect, useState } from 'react';
import {getAuth, 
        signOut as _signOut, 
        User, 
        onAuthStateChanged, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword} from 'firebase/auth';
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

  const signup = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // userをバックエンド側に登録する処理を実装する。
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode: ${errorCode}`)
        console.log(`errorMessage: ${errorMessage}`)
      });
    return
  }

  const loginForEmail = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`errorCode: ${errorCode}`)
        console.log(`errorMessage: ${errorMessage}`)
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  return {
    currentUser,
    signup,
    loginForEmail,
    logout,
    isLoading,
  };
};
