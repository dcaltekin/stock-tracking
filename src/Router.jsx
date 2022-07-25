import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SiteProvider from "./context/SiteContext";
import Products from "./pages/Products";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  );
}

export default Router;
