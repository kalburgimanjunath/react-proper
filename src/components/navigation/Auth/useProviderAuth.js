import React, { useState } from 'react';
export function useProviderAuth() {
  const [user, setUser] = useState(null);
  const signin = (id) => {
    return;
  };
  const signout = () => {
    return;
  };

  return {
    user,
    signin,
    signout,
  };
}
