import React from "react";
import "../styles/CategoryItem.css";
import { Link } from "react-router-dom";
import Item from "../Components/Items/Item";
import all_products from "../ContextAPI/All_Product";
export default function Categories(props){
    return(
        <div className="shop-category">
            <img src={props.banner} />
            <div className="deals">
                <div className="Deal-items row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                    {all_products.map((item,i)=>{
                        if(props.category===item.category){
                            return <Link style={{textDecoration:"none"}} to={`${item.link}`}><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/></Link>
                        } else return null;
                    })}    
                </div>
            </div>
        </div>
    )
}