import React from "react";
import {Link} from "react-router-dom";
const Navbar=()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Product Central</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/display" className="nav-link active" aria-current="page" href="#">Display</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link  to="addProduct" className="nav-link active" aria-current="page" href="#">Add Product</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
)
}
export default Navbar