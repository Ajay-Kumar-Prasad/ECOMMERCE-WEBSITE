import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../Components/Contents/Content";
import ShowGridItems from "../Components/ShowGridItems/ShowGridItems";
import Deals from "../Components/DealsComponent/Deals";
import data_fashion from "../data/dataFashion";
import data_deals from "../data/dataDeals";

export default function Home(){
    const [smartphones, setSmartphones] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            // Fetch all smartphones
            const res = await axios.get("http://localhost:8080/api/products?category=smartphones");
            const smartProducts = res.data.filter(
                (prod) => prod.category.toLowerCase() === "smartphones"
              );
              setSmartphones(smartProducts);
          } catch (err) {
            console.error("Error fetching products:", err);
          }
        };
    
        fetchProducts();
      }, []);
    return(
        <div>
            <Content/>
            <Deals data={smartphones} title={"Deals on Smartphones"}/>
            <Deals data={data_fashion} title={"Best Fashion Brand For You"}/>
            <ShowGridItems/>
            <Deals data={data_deals} title={"Best Deals For You"}/>
        </div>
    )
}