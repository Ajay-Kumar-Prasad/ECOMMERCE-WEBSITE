import React from "react";
import Deals from "./DealsComponent/Deals";
import data_product from "../ContextAPI/DATA/data";
export default function SmartPhones(){
    return (
        <>
        <Deals data={data_product} title={"Deals on Smartphones"}/>
        </>
    )
}