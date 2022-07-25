import { Navigate, useLocation } from "react-router-dom";
import { useSiteContext } from "../context/SiteContext";
function ProtectedRoute({ children }) {
  const location = useLocation();
  const { user } = useSiteContext();
  return user ? (
    children
  ) : (
    <Navigate to="/home" state={{ path: location.pathname }} />
  );
}

export default ProtectedRoute;
