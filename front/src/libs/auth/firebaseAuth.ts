import axios from 'axios';
import { useEffect } from 'react';
import {
  User,
  getAuth,
  onAuthStateChanged,
  // linkWithPopup,
} from "firebase/auth";
import { getProfile } from '../../stores/useAuthUser/getProfile';
import { useAuthUserMutators } from '../../globalStates/atoms/authUserState';

export const useFirebaseAuth = () => {
  const currentUser = useAuthUserMutators();
  

  // const upgradeAccount = async (method: string) => {
  //   const user = await linkWithPopup(auth.currentUser!, new GoogleAuthProvider())
  //     .then((result) => {
  //       // Accounts successfully linked.
  //       // toast.success("アップグレードしました。");
  //       return result.user;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // toast.error("アップグレード失敗しました。");
  //     });

  //   if (user) {      
  //     const idToken = await user.getIdToken();
      
  //     const config = {
  //       headers: {
  //         authorization: `Bearer ${idToken}`,
  //       },
  //     };
  //     try {
  //       const res = await axios.post(
  //         `${process.env.REACT_APP_HOST}/authentication`,
  //         null,
  //         config,
  //       );

  //       if (res.status !== 200) {
  //         throw new Error('upgrade error');
  //       }
  //       const { data: user } = getProfile(config);
  //       if (user) {
  //         currentUser.setAuthUser({
  //           name: user.name || '',
  //           avatar: user.avatar || '',
  //           description: user.description,
  //           uid: user.uid,
  //           twitterName: user.twitterName,
  //         })
  //       }
  //     } catch (error: any) {
  //       console.error(`ユーザー情報の取得に失敗しました。\n${error.messages}`);
  //     }
  //   }
  // };

  const nextOrObserver = async (authUser: User | null) => {
    if (authUser) {   
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
      // authUserがいなければ、globalStateを空にする。
      currentUser.setAuthUser(null)
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

  return {
    currentUser,
  };
};
