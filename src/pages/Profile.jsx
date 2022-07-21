import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoginStatus } from "../context/SiteContext";

import HasNoUser from "../components/HasNoUser";
import ListProduct from "../components/ListProduct";
import InsertProduct from "../components/InsertProduct";

function Profile() {
  const { loginStatus } = useLoginStatus();
  console.log(loginStatus);
  return (
    <div>
      {(!loginStatus && <HasNoUser />) || (
        <div>
          <Navbar />
          <InsertProduct />
          <ListProduct />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Profile;
