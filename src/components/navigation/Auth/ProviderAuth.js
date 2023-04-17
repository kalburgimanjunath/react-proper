import React, { createContext, useContext } from 'react';
import { useProviderAuth } from './useProviderAuth';
const authContext = createContext();
export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
