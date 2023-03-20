
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';



function RequiredAuth({ children }) {
    let auth = useAuth();

    if (!auth.isConnected) {
      return <Navigate to="/" />;
    }
  
    return children;
  }

  export default RequiredAuth;
