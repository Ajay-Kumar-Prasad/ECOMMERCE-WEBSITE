import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from "../ContextAPI/ShopContext";
import { useParams } from "react-router-dom";
import ShowProductDetails from "./ShowProductDetails";
import CategoryItem from "../Components/Items/CategoryItems"; // import CategoryItem
import '../styles/ShowProductDetails.css';

export default function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (category, subcategory, productId) => {
    navigate(`/${category}/${subcategory}/${productId}`);
  };


  useEffect(() => {
    if (all_products.length > 0) {
      const foundProduct = all_products.find(
        (prod) => String(prod.id) === String(productId)
      );
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [all_products, productId]);

  if (loading) return <div className="text-center">Loading product...</div>;
  if (!product) return <div className="text-center text-danger">Product not found!</div>;

  // Inline breadcrumbs
  const Breadcrumbs = () => (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      <i className="fa-solid fa-chevron-right"></i>
  
      <Link to="/shop">Shop</Link>
      <i className="fa-solid fa-chevron-right"></i>
  
      <Link to={`/${product.category}`}>{product.category}</Link>
      <i className="fa-solid fa-chevron-right"></i>
  
      <span className="active">{product.name}</span>
    </nav>
  );
  // Inline related products
  const RelatedProducts = () => (
    <div className="related-product-page">
      <div className="SortByProducts">
        <h3>Related Products</h3>
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {all_products.map((item, i) => {
          if (item.category === product.category && item.subcategory === product.subcategory && item.id !== product.id) {
            return (
              <CategoryItem
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                discount={item.discount}
                category={item.category}
                subcategory={item.subcategory}
                onClick={() =>
                  handleClick(item.category, item.subcategory, item.id)
                }
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );

  return (
    <div>
      <Breadcrumbs />
      <ShowProductDetails product={product} showSize={true} />
      <RelatedProducts />
    </div>
  );
}
