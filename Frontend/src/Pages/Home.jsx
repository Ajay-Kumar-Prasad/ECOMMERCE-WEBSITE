import React from "react";
import Content from "../Components/Contents/Content";
import SmartPhones from "../Components/Smartphones";
import Fashion from "../Components/Fashions";
import BestDeals from "../Components/BestDeals";
import ShowGridItems from "../Components/ShowGridOffers/ShowGridItems";
export default function Home(){
    return(
        <div>
            <Content/>
            <SmartPhones/>
            <Fashion/>
            <ShowGridItems/>
            <BestDeals/>
        </div>
    )
}