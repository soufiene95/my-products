import { useState } from "react";
import AddProduct from "./components/Products/AddProduct";
import ProductList from "./components/Products/ProductList";

function App() {
  const [prodList, setProdList] = useState([])

  const addProductHandler = (pProduct, pPrice)=> {
    setProdList((prevProdList)=>{
      return [...prevProdList, {product: pProduct, price: pPrice}]
    })
  }
  return (
    <div className="App">
      <AddProduct onAddProduct={addProductHandler} />
      <ProductList products={prodList}/>
    </div>
  );
}

export default App;
