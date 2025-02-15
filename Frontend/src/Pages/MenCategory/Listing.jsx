import React from "react";
import Sort from "../../Components/Items/Sort";
import "../MenCategory/MenCategory.css";
export default function Listing(props){
    return (
        <div className="men-shirts">
            <img className="men-shirts-banner" src={`${props.url}`}alt="" />
            <div className="men-shirts-items">
            <Sort property={`${props.listname}`} />
            </div>
        </div>  
    )
}