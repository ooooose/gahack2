import React from 'react';
import { useAuthUserState } from '../globalStates/atoms/authUserState';
import TopPage from '../components/pages/TopPage';

type LoginAuthGuardProps = {
  component: React.ReactNode;
};

// 認証状況によりハンドリングすること。
const LoginAuthGuard = ({ component }: LoginAuthGuardProps) => {
  const currentUser = useAuthUserState();
  if (currentUser.authUserType?.uid) {
    return <>{component}</>;
  } else {
    return <TopPage />;
  }
};

export default LoginAuthGuard;
