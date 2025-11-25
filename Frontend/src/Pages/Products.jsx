import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ShowProductDetails from "./ShowProductDetails";
import CategoryItem from "../Components/Items/CategoryItems"; 
import '../styles/ShowProductDetails.css';
import defaultImg from '../assets/Images/image.png';

export default function Product() {
  const { category, subcategory, productId } = useParams();
  console.log(category, subcategory, productId);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (category, subcategory, productId) => {
    navigate(`/${category}/${subcategory}/${productId}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
  
        // Fetch the main product
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${productId}`);
        setProduct(res.data);
  
        // Fetch all products of the same category
        const relatedRes = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products?category=${res.data.category}`
        );
  
        // Filter by exact subcategory and exclude current product
        const filteredRelated = relatedRes.data.filter(
          (p) =>
            p.subcategory?.toLowerCase() === res.data.subcategory?.toLowerCase() &&
            p._id !== res.data._id
        );
  
        setRelatedProducts(filteredRelated);
      } catch (err) {
        console.error(err);
        setProduct(null);
        setRelatedProducts([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [productId]);
  
  if (loading) return <p>Loading..</p>;
  if (!product) return <div className="text-center text-danger">Product not found!</div>;

  // Breadcrumbs
  const Breadcrumbs = () => (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      <i className="fa-solid fa-chevron-right"></i>
      <Link to={`/${product.category}`}>{product.category}</Link>
      <i className="fa-solid fa-chevron-right"></i>
      <span className="active">{product.name}</span>
    </nav>
  );

  // Related products component
  const RelatedProducts = () => (
    <div className="related-product-page">
      <div className="SortByProducts">
        <h3>Related Products</h3>
      </div>
      <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
        {relatedProducts.length === 0 ? (
          <p>No related products!</p>
        ) : (
          relatedProducts.map((item) => (
            <CategoryItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image || defaultImg}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={item.discount}
              category={item.category}
              subcategory={item.subcategory}
              onClick={() => handleClick(item.category, item.subcategory, item._id)}
            />
          ))
        )}
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
