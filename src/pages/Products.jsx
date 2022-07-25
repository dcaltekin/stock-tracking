import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ListProduct from "../components/ListProduct";

function Products() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="mt-48">
          <ListProduct />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Products;
