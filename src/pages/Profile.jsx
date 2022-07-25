import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSiteContext } from "../context/SiteContext";
import ListProduct from "../components/ListProduct";
import InsertProduct from "../components/InsertProduct";

function Profile() {
  const { user } = useSiteContext();
  console.log(user);
  return (
    <div>
      <div>
        <Navbar />
        <InsertProduct />
        <ListProduct />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
