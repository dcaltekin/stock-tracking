import { useEffect } from "react";
import Axios from "axios";
import { useData, useProduct_name } from "../context/SiteContext";

function ListProduct() {
  const { data, setData } = useData();
  const { product_name } = useProduct_name();

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
  function deleteTask(index) {
    Axios.post("http://localhost:3001/delete-item", {
      product_name,
    }).then((response) => {
      console.log(response);
      const confirm = window.confirm("Emin misin?");
      if (confirm) {
        const newItems = [...data];
        newItems.splice(index, 1);
        setData(newItems);
      }
    });
  }
  return (
    <div>
      <div className="bg-gray-200  w-10/12 sm:w-full mx-auto mt-8 ">
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
                    <button
                      onClick={() => deleteTask(index)}
                      className="p-4 my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
