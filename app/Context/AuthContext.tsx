import React, {
  createContext,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import GET from "~/Services/Axios/Methods/GET";
import { useLocation } from "react-router";

interface User {
  name: string;
  family: string;
  mobile: string;
  username: string;
}

export interface AuthContextType {
  login: () => boolean;
  user: User | null;
  pending: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);
  const location = useLocation();

  const login = () => {
    return user !== null;
  };

  useEffect(() => {
    setPending(true);
    GET("/auth/user", {}, "normal")
      .then((r) => {
        if (r.status === 200) {
          setUser(r.data.data.user);
        } else {
          setUser(null);
        }
      })
      .finally(() => setPending(false));
  }, [location]);

  return (
    <AuthContext.Provider value={{ login, user, pending }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
