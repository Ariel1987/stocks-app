import { Navigate } from "react-router-dom";
import { useLoginData } from "../../context/useLoginData";

const PrivateRoute = ({ children }) => {
  const { user } = useLoginData()

  return user ? children : <Navigate to='/login' />
}

export default PrivateRoute