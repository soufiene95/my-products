import { useState, Fragment } from "react";

import classes from "./AddProduct.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddProduct(props) {
  const [enterProd, setEnterProd] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [error, setError] = useState();
  const onSubmit = (evt) => {
    evt.preventDefault();

    if (enterProd.trim().length === 0 || enterPrice.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid product and price (non-empty values)",
      });
      return;
    }
    if (+enterPrice < 1) {
      setError({
        title: "Invalid inputprice",
        message: "Please enter a valid price (price > 0)",
      });
      return;
    }

    // console.log(enterProd, enterPrice);
    props.onAddProduct(enterProd, enterPrice);
    setEnterProd("");
    setEnterPrice("");
  };

  const proHandleChange = (evt) => {
    setEnterProd(evt.target.value);
  };

  const priceHandleChange = (evt) => {
    setEnterPrice(evt.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmit}>
          <label htmlFor="product">Product</label>
          <input
            id="product"
            type="text"
            onChange={proHandleChange}
            value={enterProd}
          />
          <label htmlFor="price">Price (€)</label>
          <input
            id="price"
            type="number"
            onChange={priceHandleChange}
            value={enterPrice}
          />
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddProduct;
