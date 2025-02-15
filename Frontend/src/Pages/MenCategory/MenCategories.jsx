import React from "react";
// import '../CSS/Categories.css';
import '../../Components/Items/CategoryItems.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../ContextAPI/All_Product";
import { Link } from "react-router-dom";
export default function MenCategories(props){

    const shirtURL = "https://i.pinimg.com/originals/72/c6/be/72c6be72e26904f53f1a042057f01c61.jpg"
    const tshirtURL = "https://ae01.alicdn.com/kf/HTB1nR3uGWmWBuNjy1Xaq6xCbXXaE/casual-men-s-t-shirt-new-short-sleeved-Summer-Retro-Style-Synthwave-Graphic-Logo-Design-printing.jpg"
    const shoesURL = "https://ae01.alicdn.com/kf/H25a36e5dfdb243bf93a08b34bd3f41376/Men-Business-Casual-Shoes-PU-Leather-Running-Shoes-Fashion-Lace-Up-Casual-Sneakers-Male-Outdoor-Walking.jpg"
    const jeansURL = "https://images.bewakoof.com/t320/men-s-blue-jeans-mid-blue-624672-1706594218-1.jpg"
    const ethnicURL = "https://shaadiwish.com/blog/wp-content/uploads/2023/10/2.-Samoh-India-Has-Chic-Festive-Season-Menswear-1-300x300.jpeg"
    const blazerURL="https://ae01.alicdn.com/kf/HTB1PMdeSVXXXXXNaXXXq6xXFXXXl/2017-designer-men-Suit-Jackets-Autumn-Slim-blazer-masculino-casual-Blazer-men-high-quality-Business-dress.jpg"
    const watchesURL = "https://ae01.alicdn.com/kf/HTB1kRYBXiHrK1Rjy0Flq6AsaFXa6/Geneva-Mens-Watch-Date-Stainless-Steel-Leather-Analog-Alloy-Quartz-Wrist-Watch-Waterproof-Military-Sports-Watches.jpg"
    const earbudsURL = "https://m.media-amazon.com/images/I/61PULZm67sL._AC_UF894,1000_QL80_.jpg"
    const formalURL = "https://images.bestsellerclothing.in/data/selected/31-jan-2024/118607001_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto"
    const trousersURL = "https://ae01.alicdn.com/kf/HTB1c5R1QpXXXXanapXXq6xXFXXXo/Plus-Size-28-36-Men-s-Casual-Pants-Slim-Fit-Gray-Straight-Pants-Men-Fashion-Red.jpg"
    
    return(
        <div className="shop-category">
            <img src={props.banner} />
            <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                <div class="card card-product-list">
                    <Link to={`/${props.category}/shirts`}><img src={shirtURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Shirts</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/tshirts`}><img src={tshirtURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Tshirts</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/shoes`}><img src={shoesURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Shoes</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/jeans`}><img src={jeansURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Jeans</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/ethnics`}><img src={ethnicURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Ethnics</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/blazers&suits`}><img src={blazerURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Blazers</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/watches`}><img src={watchesURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Watches</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/earbuds`}><img src={earbudsURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Earbuds</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/formals`}><img src={formalURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Formals</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/trousers`}><img src={trousersURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Trousers</p>
                    </div>
                </div>
            </div>
            <div className="SortByProducts">
                <h3>Showing all 10 results</h3>
            </div>
            <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                {all_products.map((item,i)=>{
                    if(props.category===item.category){
                        return <CategoryItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} discount={item.discount}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}