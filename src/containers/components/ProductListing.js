import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
  const products = useSelector((state) => state); //bach knjibo state (reduxStore)
  const dispatch = useDispatch(); //li l irsal

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products :", products);

  return (
    <>
      <div className="ui grid container">
        <ProductComponent/>
      </div>
    </>
  );
};

export default ProductListing;
