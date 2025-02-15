import React, { useState } from "react"
import './Content.css'
import { Link } from "react-router-dom";
export default function Content(){
    const [currIdx,setCurrIdx]= useState(0);
    const contentBanners = [
        
        {url:"https://www.orchardtaunton.co.uk/app/uploads/2021/06/OSC-Summer-Generic-Website-Banner-01.jpg",link:"Best-Deals"},
        {url:"https://i.pinimg.com/originals/8f/8c/96/8f8c96d99932fce8c786b4130d624dca.jpg",link:"wedding"},
        {url:"https://m.media-amazon.com/images/S/aplus-media/vc/85497716-3f9c-41f7-abf0-76003c76fa44.__CR0,0,970,300_PT0_SX970_V1___.jpg",link:"boat-headphones"},
        {url:"https://1.bp.blogspot.com/-tjmqXN7PvSA/YNBUBC4a_rI/AAAAAAAAE5U/HzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ/s1920/Laptop_banner.jpg",link:""},
    ]
    const goToNext=()=>{
        const isLastSlide = currIdx===contentBanners.length-1;
        const newIdx = isLastSlide?0: currIdx+1;
        setCurrIdx(newIdx);
    }
    const goToPrevious=()=>{
        const isFirstSlide = currIdx===0;
        const newIdx = isFirstSlide?contentBanners.length-1: currIdx-1;
        setCurrIdx(newIdx);
    }
    let contentStyles = {
        height:"430px" ,
        alignItems: "center",
        backgroundSize:"cover"
    } 
    return(
        <>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <Link to={`/${contentBanners[currIdx].link}`}><img style={contentStyles} src={`${contentBanners[currIdx].url}`} alt="" /> </Link>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"onClick={goToPrevious} aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon"onClick={goToNext} aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}