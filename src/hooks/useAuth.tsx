import React, { createContext, useContext, useState } from "react";

import { api } from "@/services/api";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LoginService } from "@/services/login.service";

interface IAuthProps {
  children: React.ReactNode;
}

interface IAuthContextData {
  userData: unknown;
  handleLogin: (formData: unknown) => Promise<void>;
  handleLogout: () => void;
}

const AuthContext = createContext({} as any);

const AuthProvider = ({ children }: IAuthProps) => {
  const [localUserData, setLocalUserData] = useLocalStorage({
    key: "userData",
    initialValue: {} as unknown
  });

  const [userData, setUserData] = useState<unknown>(localUserData);

  api.defaults.headers.common = {
    Authorization: `Bearer ${userData.token}`
  };

  const handleLogin = async (formData: unknown): Promise<void> => {
    try {
      const { data } = await LoginService.login(formData);

      setLocalUserData({ ...data.user, token: data.data.token });

      setUserData(() => ({
        ...data.user,
        token: data.data.token
      }));
    } catch (error) {
      throw new Error("Auth Failed");
    }
  };

  const handleLogout = (): void => {
    setUserData({} as unknown);

    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        handleLogin,
        handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser usado com um AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
