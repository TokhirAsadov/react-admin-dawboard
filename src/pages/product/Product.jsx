import React from 'react';
import AddNewProduct from "../../component/addNewProduct/AddNewProduct";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import "./Product.css";

const Product = () => {
    return (
            <div className="product">
                <AddNewProduct />
            </div>
    );
};

export default Product;