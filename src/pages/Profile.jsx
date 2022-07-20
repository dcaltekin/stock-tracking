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
        toast.success(
          product_name + " isimli ürün " + stock + " adet eklendi."
        );
        //setProduct_name("");
        //setStock("");
      }
    });
  };

  const productList = () => {
    Axios.get("http://localhost:3001/product-list", {}).then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

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
                className=" ml-4  form-label block mb-2 text-gray-700 text-xl w-80 h-12"
                type="text"
                placeholder="Ürün adı giriniz..."
                onChange={(e) => setProduct_name(e.target.value)}
              />
              <label className="text-xl ml-4 ">Adet:</label>
              <input
                className="form-label ml-4 block mb-2 text-gray-700 text-xl w-80 h-12"
                type="number"
                placeholder="Ürün adedi giriniz..."
                onChange={(e) => setStock(e.target.value)}
              />
              <button
                className="mx-4  w-80 disabled:opacity-50 disabled:-z-50 h-14  inline-block bg-green-500 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                disabled={!product_name + !stock ? true : false}
                onClick={product}
              >
                Ürün ekle
              </button>
              <Toaster />
            </form>
          </div>
          <button onClick={productList}>DENEME LİSTE</button>

          <div className="bg-gray-200  w-11/12 sm:w-11/12 mx-auto mt-8">
            <div className="overflow-x-auto border-x border-t">
              <table className="table-auto w-full text-center">
                <thead className="border-b">
                  <tr className="bg-gray-300 ">
                    <th className="p-4 text-2xl font-medium">Ekleyen</th>
                    <th className="p-4 text-2xl font-medium">Ürün Adı</th>
                    <th className="p-4 text-2xl font-medium">Stok Sayısı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Tahsin</td>
                    <td className="p-4">Tişört</td>
                    <td className="p-4">88</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Doğukan</td>
                    <td className="p-4">Mont</td>
                    <td className="p-4">177</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Doğukan</td>
                    <td className="p-4">Mont</td>
                    <td className="p-4">177</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Doğukan</td>
                    <td className="p-4">Mont</td>
                    <td className="p-4">177</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">Doğukan</td>
                    <td className="p-4">Mont</td>
                    <td className="p-4">177</td>
                  </tr>
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
