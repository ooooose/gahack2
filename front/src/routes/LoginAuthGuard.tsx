import React, { ReactElement } from 'react';

type LoginRouteGuardProps = {
  children: ReactElement;
};

// 認証状況によりハンドリングすること。
const LoginAuthGuard = ({ children }: LoginRouteGuardProps) => {
  return <>{children}</>;
};

export default LoginAuthGuard;
