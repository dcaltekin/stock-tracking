import Axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  useProduct_name,
  useStock,
  useData,
  useLoginStatus,
} from "../context/SiteContext";

function InsertProduct() {
  const { product_name, setProduct_name } = useProduct_name();
  const { stock, setStock } = useStock();
  const { setData } = useData();
  const { loginStatus, setLoginStatus } = useLoginStatus();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const product = () => {
    Axios.post("http://localhost:3001/insertproduct", {
      product_name: product_name,
      stock: stock,
      to_added_by: loginStatus,
    }).then((response) => {
      if (response) {
        console.log(response);
        setProduct_name("");
        setStock("");

        setData((data) => [...data, { loginStatus, product_name, stock }]);
        toast.success(
          product_name + " isimli ürün " + stock + " adet eklendi."
        );
      }
    });
  };

  return (
    <div>
      {" "}
      <section className="text-gray-600 body-font relative">
        <form onSubmit={handleSubmit}>
          <div className="container px-5 py-24 mx-auto mt-24">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-5xl font-medium title-font mb-4 text-gray-900 ">
                Ürün Ekle
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto w-7/12">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2 sm:w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Ürün Adı
                    </label>
                    <input
                      value={product_name}
                      onChange={(e) => setProduct_name(e.target.value)}
                      placeholder="Ürün adını giriniz."
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 sm:w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Ürün Adedi
                    </label>
                    <input
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      type="number"
                      placeholder="Ürün adedini giriniz."
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Gerekirse mesaj bölümü eklenebilir.
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      disabled={true}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="w-full text-center disabled:opacity-50 flex justify-center mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    disabled={!product_name + !stock ? true : false}
                    onClick={() => {
                      product();
                    }}
                  >
                    Ürün Ekle
                  </button>
                  <Toaster></Toaster>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default InsertProduct;
