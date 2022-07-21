import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoginStatus } from "../context/SiteContext";
import HasNoUser from "../components/HasNoUser";
import ListProduct from "../components/ListProduct";

function Products() {
  const { loginStatus } = useLoginStatus();

  return (
    <div>
      {(!loginStatus && <HasNoUser />) || (
        <div>
          <Navbar />
          <div className="mt-48">
            <ListProduct />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Products;
