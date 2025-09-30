import React from "react";
import '../../styles/Deals.css';
import Item from "../Items/Item";
import { Link } from "react-router-dom";
export default function Deals({title,data}){
    return (
        <div className="deals">
            <div className="deals-title">
                <h2>{title}</h2>
            </div>
            <div className="Deal-items row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                {data.map((item,i)=>{
                    return <Link style={{textDecoration:"none"}} to={`${item.link}`} key={i}><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/></Link>
                })}    
            </div>
        </div>
    )
}