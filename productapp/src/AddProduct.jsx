import React, { useState } from "react";
import ProductService from "./service/productservice";
const AddProduct=()=>{
  const [product,setProduct]=useState(
    {
      productname:" ",
      description:" ",
      price:" ",
      status:" "
    }
  )
  const handleChange=(e)=>{
    const value=e.target.value;
    setProduct({...product,[e.target.name]:value})
  }
  const ProductRegister=(e)=>{
    e.preventDefault();
    console.log(product);
  

    ProductService.saveProduct(product).then((res)=>{
      console.log("Product Added Successfully");
      setmsg("Product Added Sucess");
      setProduct({
        productname:" ",
        description:" ",
        price:" ",
        status:" ",
      })

    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const [msg,setmsg]=useState("");

  return (
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header fs-3 text-center">
            Add Product
          </div>
          {
            msg && <p className="fs-4 text-center text-success">{msg}</p>
          }
          <form onSubmit={(e)=>ProductRegister(e)}>
            <div className="mb-3">
              <label>Enter Product Name</label>
              <input type="text" name="productname" className="form-control" onChange={(e)=>handleChange(e)} value={product.productname} />
              <label>Enter Description</label>
              <input type="text" name="description" className="form-control" onChange={(e)=>handleChange(e)}  value={product.description}/>
              <label>Enter  Price</label>
              <input type="text" name="price" className="form-control" onChange={(e)=>handleChange(e)} value={product.price}/>
              <label>Enter Product Status</label>
              <input type="text" name="status" className="form-control" onChange={(e)=>handleChange(e)}  value={product.status}/>
            </div>
            <button className="btn btn-primary col-md-12" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
}
export default AddProduct;