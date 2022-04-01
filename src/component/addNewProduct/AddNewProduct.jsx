import React,{useState} from 'react';
import "./AddNewProduct.css";
import {AddBox} from "@material-ui/icons";

const AddNewProduct = () => {

    const data = [
        {id:1,value:"sm"},
        {id:2,value:"s"},
        {id:3,value:"x"}
    ];

    const detailMeturement = {
      id: "",
      meturementValue: ""
    };

    const detail = {
        id: "",
        detail: "",
        value: "",
        detailMeturement: detailMeturement
    }

    const [meturements, setMeturements] = useState(data);
    const [isAddBtn,setIsAddBtn] = useState(false);
    const [details,setDetails] = useState([detail]);

    const addDetail = (e) => {
        e.preventDefault();

        /**
         *
         * axios ni ulash kerak...............................
         *
         **/

        details.push(detail);
        console.log(details);
    }

    // const productDetail = () => {
    //      <div className="product_detail">
    //         <div className="row">
    //             <span className="crud_item">
    //                  <label className="product_detail_label" htmlFor="detail">Product Detail:</label>
    //                  <input className="product_detail_item" id="detail" type="text" placeholder="Enter Detail"/>
    //             </span>
    //             <span className="crud_item">
    //                   <label className="product_detail_label" htmlFor="value">Product Value:</label>
    //                   <input className="product_detail_item" id="value" type="text" placeholder="Enter Value"/>
    //             </span>
    //             <span className="crud_item">
    //                   <label className="product_detail_label" htmlFor="meturment">Product Meturment:</label>
    //                   <select className="product_detail_item" id="meturment" name="mashurment" >
    //                       <option value="0">Select meturment...</option>
    //                       <option value="1">1</option>
    //                       <option value="2">2</option>
    //                       <option value="3">3</option>
    //                   </select>
    //             </span>
    //         </div>
    //     </div>;
    // }

    return (
        <div className={"addNewProduct"}>
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <span className={"icon_wrapper"}>
                            <AddBox className={"add_product_icon"}/>
                        </span>
                        <h3 className={"title_value"}>Add New Product</h3>
                    </div>
                    <div className="row">
                      <span className="crud_item">
                          <label htmlFor={"name"}>Product Name:</label>
                          <input className="product_item_input" id="name" type="text" placeholder={"Enter Product Name"}/>
                      </span>
                      <span className="crud_item">
                          <label htmlFor={"price"}>Product Price:</label>
                          <input className="product_item_input" id="price" type="text" placeholder={"Enter Product Price"}/>
                      </span>

                  </div>
                    <div className="row">
                       <span className="crud_item">
                          <label htmlFor={"category"}>Product Category:</label>
                          <select className="product_item_input" id={"category"}>
                              <option value="0">Select category...</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                          </select>
                      </span>
                      <span className="crud_item">
                          <label htmlFor={"brand"}>Product Brand:</label>
                          <select className="product_item_input" id={"brand"}>
                              <option value="0">Select brand...</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                          </select>
                      </span>
                  </div>
                    <div className="row description">
                      <label htmlFor={"description"} className={"description_label"}>Product Description:</label>
                      <textarea
                          className="product_item_input"
                          name="description"
                          id="description"
                          cols="30"
                          rows="10"
                          placeholder={"Enter product description..."}>
                      </textarea>
                  </div>
                    <div className="product_details">
                      {
                          details.map(det =>
                              <div className="product_detail" key={det}>
                                  <div className="row">
                                      <span className="crud_item">
                                          <label className="product_detail_label" htmlFor={"detail" + det.id}>Product Detail:</label>
                                          <input className="product_detail_item" id={"detail" + det.id} type="text" placeholder="Enter Detail"/>
                                      </span>
                                      <span className="crud_item">
                                          <label className="product_detail_label" htmlFor={"value" + det.id}>Product Value:</label>
                                          <input className="product_detail_item" id={"value" + det.id} type="text" placeholder="Enter Value"/>
                                      </span>
                                      <span className="crud_item">
                                          <label className="product_detail_label" htmlFor={"meturment" + det.id}>Product Meturment:</label>
                                          <select className="product_detail_item" id={"meturment" + det.id} name="mashurment" >
                                              <option value="0">Select meturment...</option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                          </select>
                                      </span>
                                  </div>
                              </div>
                          )
                      }



                      <div className="btn_detail_wrapper">
                        <button onClick={addDetail} className="btn_add_product_detail" >+</button>
                      </div>
                  </div>
                    <div className="product_pictures">
                        {/**
                            * picture add funksiyasini qiliw kk, o`zgaruvchi array kk
                        **/}
                        <div className="product_picture">
                            <div className="row">
                                <span className="crud_picture">
                                    <input type="file"/>
                                </span>
                                <span className="crud_picture">
                                    <input type="checkbox"/>
                                </span>
                                <span className="crud_picture">
                                    <input type="color" />
                                </span>
                            </div>
                        </div>
                        <div className="btn_detail_wrapper">
                            <button
                                onClick={addDetail}
                                className="btn_add_product_detail"
                                formTarget={"Rasm qo`shish"}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;