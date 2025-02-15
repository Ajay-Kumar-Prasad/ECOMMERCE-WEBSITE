import React from "react";
import "./CategoryItems.css";
import { Link } from "react-router-dom";
export default function CategoryItem(props){
    return(
        <div class="card card-product">
            <Link to={`/product/${props.id}`}><img src={props.image} class="card-img-top card-image" alt="..."/></Link>
            <div class="card-body">
                <p class="card-text">
                    <b>{props.name}</b><br />
                    ₹{props.new_price.toLocaleString("en-IN")}&nbsp;
                    <a style={{color:"green"}}>{props.discount}</a>&nbsp;
                    <a style={{textDecoration:"line-through",color:'red'}}>₹{props.old_price.toLocaleString("en-IN")}</a>
                </p>
            </div>
        </div>
    )
}