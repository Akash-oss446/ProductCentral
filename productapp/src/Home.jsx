import React from "react";
import './App.css';
import { Link } from "react-router-dom";
const Home=()=>{
return(
    <div className="container mt-3">
    <div className="row">
    <div className="col-md-30">
        <h1>Product Central</h1>
        </div>
     <h4 className="h3">Product Central is your go-to solution for streamlined product data management. 
        <br></br> It simplifies the tasks of adding, updating, and organizing your product details.
         </h4>
         <div class="d-grid gap-7 col-6 mx-auto"><br></br><br></br>
         <Link to='display/' className="btn btn-primary col-md-9">View Products</Link>
         </div>
  </div>
  </div>
);
}
export default Home;

