import { createContext, useContext, useState } from 'react';

let AuthContext = createContext({});

function AuthProvider({ children }) {
    let [isConnected, setIsConnected] = useState(false);

    let login = () => {
      setIsConnected(true)
    }
  
    let logout = () => {
      localStorage.removeItem('access');
      setIsConnected(false);
    }
  
    let value = { isConnected, login, logout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;