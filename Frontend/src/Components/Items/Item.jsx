import React from "react"
import "../../Pages/CSS/Item.css";
export default function Item(props){
    return(
        <div class="card card-item" style={{width:"12rem", height:"18rem"}}>
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-txt">
                    <b>{props.name}</b><br />
                    <p style={{color:"green"}}>{props.new_price.toLocaleString("en-IN")}</p>
                </p>
            </div>
        </div>
    )
}