import {
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { NavigateFunction } from 'react-router-dom';
import { auth } from '../firebase/initFirebase';

export const loginWithGoogle = async (
  navigate: NavigateFunction,
  fromPathName: string
) => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);

    if (getAdditionalUserInfo(result)?.isNewUser) {
      navigate('/pictures', {
        state: {
          from: {
            pathname: fromPathName,
          },
        },
      });
      return;
    }
    console.log();
    navigate(fromPathName);
  } catch (error: any) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      alert(
        `${error.customData.email}は他のSNSと連携した既存ユーザーが登録済みです。既存ユーザーでログイン後、こちらのSNSとの連携が可能です`
      );
      return;
    }
    alert(`ログイン/新規登録に失敗しました。\n${error.message}`);
  }
};