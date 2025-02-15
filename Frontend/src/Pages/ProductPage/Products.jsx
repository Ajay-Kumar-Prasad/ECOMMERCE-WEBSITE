import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../ContextAPI/ShopContext";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";
import ShowProductDetails from "./ShowProductDetails";
import RelatedProduct from "./RelatedProducts" 
export default function Product() {
  const { all_products, shirts_data } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = findProductById(Number(productId));
    setProduct(foundProduct); 
  }, [all_products, shirts_data, productId]);

  const findProductById = (id) => {
    let foundProduct = all_products.find((prod) => prod.id === id);
    if (!foundProduct) {
      foundProduct = shirts_data.find((prod) => prod.id === id);
    }
    return foundProduct;
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ShowProduct product={product} />
      <ShowProductDetails product={product} showSize={true} />
      <RelatedProduct category={product.category}/>
    </div>
  );
}
