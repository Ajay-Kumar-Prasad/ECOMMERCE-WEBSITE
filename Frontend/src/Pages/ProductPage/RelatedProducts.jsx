import React from "react";
import '../CSS/RelatedProduct.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../ContextAPI/All_Product";
export default function RelatedProduct(props){
    return(
        <div className="related-product-page">
           <div className="SortByProducts"><h3>Related Products</h3> </div>
           <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
           {all_products.map((item,i)=>{
                if(props.category===item.category && props.id !== item.id){
                    return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/>
                }
                else return null;
            })} 
           </div> 
        </div>
    )
}