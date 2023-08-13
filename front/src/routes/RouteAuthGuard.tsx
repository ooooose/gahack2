import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  { useAuthUserState } from '../globalStates/atoms/authUserState';

type RouteAuthGuardProps = {
  component: ReactNode;
  redirect: string;
};

export const RouteAuthGuard = ({
  component,
  redirect,
}: RouteAuthGuardProps) => { 
  const location = useLocation();
  const currentUser = useAuthUserState();


}