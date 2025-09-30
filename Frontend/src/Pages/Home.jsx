import React from "react";
import Content from "../Components/Contents/Content";
import ShowGridItems from "../Components/ShowGridItems/ShowGridItems";
import Deals from "../Components/DealsComponent/Deals";
import data_product from "../data/data";
import data_fashion from "../data/dataFashion";
export default function Home(){
    let data_deals = [
        {
            id:500,
            name:"Kids Fashion",
            image:"https://th.bing.com/th/id/OIP.Djvrpk8uaCM5Xi-PW3yiegHaJr?rs=1&pid=ImgDetMain",
            new_price:"Min.60%off",
            link:"/kids"
        },{
            id:501,
            name:"Allen Solley & Van He..",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/j/5/2/-original-imah5vjrwkdpdh84.jpeg?q=70",
            new_price:"Min 50%off",
            link:"/women/heels"
        },{
            id:502,
            name:"Totes",
            image:"https://rukminim2.flixcart.com/image/400/400/xif0q/hand-messenger-bag/b/r/a/women-stylish-jute-bag-jute-tote-bag-tote-pearluxis-original-imah4gkcfeqkmwrg.jpeg?q=70",
            new_price:"min 70% off",
            link:"/women/handbags"
        },{
            id:503,
            name:"Men's Jackets",
            image:"https://rukminim2.flixcart.com/image/400/400/xif0q/jacket/8/e/q/s-1-no-mt2-jkt-arrow-print-ice-blue-white-motrex-original-imah4khgjwudddgg.jpeg?q=70",
            new_price:"Special offer",
            link:"/men"
        },
        {
            id:504,
            name:"Women's Sarees",
            image:"https://rukminim2.flixcart.com/image/400/400/xif0q/sari/d/a/h/free-501-dummy-kanooda-prints-unstitched-original-imah8g9zhuts6uyf.jpeg?q=70",
            new_price:"Min 50% off",
            link:"/women/sarees"
        },
        {
            id:505,
            name:"Explore Ethnics",
            image:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/0/d/d/xl-lacko-new-559-click-n-buy-original-imah2azwkzp8ky2x.jpeg?q=70",
            new_price:"Min 60% off",
            link:"/men/ethnics"
        },
    ]
    return(
        <div>
            <Content/>
            <Deals data={data_product} title={"Deals on Smartphones"}/>
            <Deals data={data_fashion} title={"Best Fashion Brand For You"}/>
            <ShowGridItems/>
            <Deals data={data_deals} title={"Best Deals For You"}/>
        </div>
    )
}