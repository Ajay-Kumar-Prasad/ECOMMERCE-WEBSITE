import React, { useContext} from "react";
import '../CSS/ShowProductDetails.css';
import { useState } from "react";
import { ShopContext } from "../../ContextAPI/ShopContext";
import { Link } from "react-router-dom";
export default function ShowProductDetails(props){
    const {product} = props;
    const {addToCart}= useContext(ShopContext);
    // let [like,setLike]=useState(false)
    // let toggleLike = () => {
    //     setLike(!like);
    // }
    // let likeStyle = {color:"red"}
    let [addedToCart,setAddedToCart] = useState(false);
    const handleAddToCart = () => {
        if (addedToCart) {
        } else {
            addToCart(product.id);
            setAddedToCart(true);
        }
    };
    return (
        <div class="clearfix product-container">
            <img src={product.image} class="col-md-6 float-md-start mb-3 ms-md-3 clearfix product-image position-relative" alt="..."/>
            <div className="product-details">
                <h3 style={{color:"grey"}} className="product-inner-details">{product.brand_name}</h3>
                <h5>{product.full_name}</h5>
                <p>Ratings <i className="fa-solid fa-star" style={{color:"#fe424d"}}></i>{product.rating}</p>
                <p><a style={{color:"rgb(238, 95, 126)"}}>₹{product.new_price.toLocaleString("en-IN")}</a> <a style={{textDecoration:"line-through"}}>₹{product.old_price.toLocaleString("en-IN")}</a> <a style={{color:"green"}}>₹{product.discount} <b>inclusive of all taxes</b></a></p>
                <h4>Description</h4>
                <p>{product.description}</p>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-addtocart" onClick={handleAddToCart}>
            <i className="fa-solid fa-bag-shopping"></i>&nbsp;{addedToCart ? (<Link to="/cart" style={{textDecoration:"none", color:"white"}}><a>Go to Cart</a></Link>) : (<a>Add To Cart</a>)}
            </button> &nbsp;&nbsp;
            <button type="button" className="btn btn-outline-secondary btn-wishlist"><i class="fa-regular fa-heart">&nbsp;</i>Wishlist</button>
            { props.showSize && (product.id < 70 || product.id > 75) &&
            <>
            <h6><br />&nbsp;&nbsp;&nbsp;&nbsp;SELECT SIZE</h6>
            &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-outline-secondary btn-wishlist btn-size">S</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-wishlist btn-size">M</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-wishlist btn-size">L</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-wishlist btn-size">XL</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-wishlist btn-size">XXL</button>
            </>
        }
        </div>
    )
}
        //     <a onClick={toggleLike} >
        //         {like? (<i class="fa-solid fa-heart" style={likeStyle}></i>)
        //         :( <i className="fa-regular fa-heart"></i>)}
        //     </a>