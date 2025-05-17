import { useContext } from "react";
import { AuthContext } from "~/Context/AuthContext";
import type { AuthContextType } from "~/Context/AuthContext"; // Import the type

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useAuth;
