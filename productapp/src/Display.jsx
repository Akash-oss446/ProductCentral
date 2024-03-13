import React, { useEffect, useState } from "react";
import productService from "./service/productservice";
import { Link } from "react-router-dom";
const Display = () => {
  const [productlist, setProductlist] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, [productlist]);
  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductlist(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Delete SucessFully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product List
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            </div>
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productlist.map((p, num) => (
                    <tr>
                      <td>{num + 1}</td>
                      <td>{p.productname}</td>
                      <td>{p.description}</td>
                      <td>{p.price}</td>
                      <td>{p.status}</td>
                      <td>
                        <Link
                          to={"editProduct/" + p.id}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="btn btn-sm btn-danger ms-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display;
