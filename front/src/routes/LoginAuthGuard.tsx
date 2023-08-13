import React, { ReactElement } from "react";
import { useAuthUserState } from "../globalStates/atoms/authUserState";


type LoginRouteGuardProps = {
  children: ReactElement;
};

// 認証状況によりハンドリングすること。
const LoginAuthGuard = ({ children }: LoginRouteGuardProps) => {
  const currentUser = useAuthUserState();
  return (
    <>
    </>
  )
}

export default LoginAuthGuard;