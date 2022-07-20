import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../context/SiteContext";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useLoginStatus } from "../context/SiteContext";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function Profile() {
  const [product_name, setProduct_name] = useState("");
  const [stock, setStock] = useState("");
  const [to_added_by, setTo_added_by] = useState("");

  const [data, setData] = useState([]);

  const { loginStatus, setLoginStatus } = useLoginStatus();

  const { user, setUser } = useUser();

  console.log(loginStatus);

  console.log(data);

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

  useEffect(() => {
    const productList = async () => {
      await Axios.get("http://localhost:3001/product-list", {}).then(
        (response) => {
          console.log(response);
          setData(response.data);
        }
      );
    };
    productList();
  }, []);

  return (
    <div>
      {(!user && (
        <Link to="/">
          <div className="flex justify-center items-center">
            <button className="bg-gray-200 mt-8 text-3xl p-8">
              Giriş Yetkiniz Yoktur! Anasayfaya dönünüz.
            </button>
          </div>
        </Link>
      )) || (
        <div>
          <Navbar />

          <div className="flex justify-center  items-center  mt-36 ">
            <form onSubmit={handleSubmit}>
              <label className="text-xl ml-4  ">Ürün:</label>
              <input
                value={product_name}
                className=" ml-4  form-label block mb-2 text-gray-700 text-xl w-80 h-12"
                type="text"
                placeholder="Ürün adı giriniz..."
                onChange={(e) => setProduct_name(e.target.value)}
              />
              <label className="text-xl ml-4 ">Adet:</label>
              <input
                value={stock}
                className="form-label ml-4 block mb-2 text-gray-700 text-xl w-80 h-12"
                type="number"
                placeholder="Ürün adedi giriniz..."
                onChange={(e) => setStock(e.target.value)}
              />
              <button
                className="mx-4  w-80 disabled:opacity-50 disabled:-z-50 h-14  inline-block bg-green-500 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                disabled={!product_name + !stock ? true : false}
                onClick={() => {
                  product();
                }}
              >
                Ürün ekle
              </button>
              <Toaster />
            </form>
          </div>

          <div className="bg-gray-200  w-10/12 sm:w-full mx-auto mt-8">
            <div className="overflow-x-auto border-x border-t">
              <table className="table-auto w-full text-center">
                <thead className="border-b">
                  <tr className="bg-gray-300 ">
                    <th className="p-4 text-2xl font-medium">Ekleyen</th>
                    <th className="p-4 text-2xl font-medium">Ürün Adı</th>
                    <th className="p-4 text-2xl font-medium">Stok Sayısı</th>
                    <th className="p-4 text-2xl font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4">{product.to_added_by}</td>
                      <td className="p-4">{product.product_name}</td>
                      <td className="p-4">{product.stock}</td>
                      <td>
                        <button className="p-4 my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Profile;
