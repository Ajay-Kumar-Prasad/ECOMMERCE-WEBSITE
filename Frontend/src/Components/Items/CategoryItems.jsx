import React from "react";
import "../../styles/CategoryItems.css";
import defaultImg from '../../assets/Images/image.png';
export default function CategoryItem({ id, name, image, new_price, old_price, discount, category, subcategory, onClick }){
    return(
        <div class="card card-product" onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={image || defaultImg} class="card-img-top card-image" alt="..."/>
            <div class="card-body">
                <p class="card-text">
                    <b>{name}</b><br />
                    ₹{new_price.toLocaleString("en-IN")}&nbsp;
                    <a style={{color:"green"}}>{discount}</a>&nbsp;
                    <a style={{textDecoration:"line-through",color:'red'}}>₹{old_price.toLocaleString("en-IN")}</a>
                </p>
            </div>
        </div>
    )
}