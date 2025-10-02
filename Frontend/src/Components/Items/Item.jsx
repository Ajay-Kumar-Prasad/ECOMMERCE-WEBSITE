import React from "react"
import "../../styles/Item.css";
export default function Item(props){
    return(
        <div class="card card-item" style={{width:"15rem", height:"18rem"}} onClick={props.onClick}>
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