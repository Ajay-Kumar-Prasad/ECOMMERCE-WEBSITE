import React from "react";
import Deals from "./DealsComponent/Deals";
import data_fashion from "../ContextAPI/DATA/dataFashion";
export default function Fashion(){
    return (
        <>
        <Deals data={data_fashion} title={"Best Fashion Brand For You"}/>
        </>
    )
}