import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ShowGridItems.css";
export default function ShowGridItems(){
    return (
        <>
        <div class="container text-center">
            <div class="row g-3">
                <div class="row-grid1 col-12 col-md-7"><Link to="/Men"><img src="https://img.paisawapas.com/ovz3vew9pw/2024/12/30160659/Blog-Banner-PW.jpg" alt="" /></Link></div>
                <div class="col-10 col-md-4 d-flex flex-column gap-3">
                    <div className="row-grid2"><Link to="/Women"><img src="https://cdn.maliparmi.filoblu.com/media/contentmanager/content/resized/767x/contentmanager/content/top%20banner_mobile%20(1).jpg" alt="" /></Link></div>
                    <div className="row-grid3"><Link to="/ethnics"><img src="https://img.perniaspopupshop.com/HOMEPAGE_IMAGES/WOMEN/18_Jan_25/Mobile-EOSS-Sale-Lehengas-18-01-25.jpg" alt="" /></Link></div>
                </div>
            </div>
        </div>
        </>
    )
}