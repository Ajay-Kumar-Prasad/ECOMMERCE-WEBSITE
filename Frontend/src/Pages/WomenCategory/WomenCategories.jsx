import React from "react";
import '../CSS/Categories.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../ContextAPI/All_Product";
import { Link } from "react-router-dom";
export default function WomenCategories(props){
    const dressesURL = "https://i.pinimg.com/736x/1a/e1/43/1ae14341b8d9573ecef88c454edca694.jpg"
    const topsURL = "https://i.pinimg.com/originals/16/96/d4/1696d40c051b038d4f56c8b91348a8fc.jpg"
    const kurtiURL = "https://urbanstree.com/cdn/shop/files/April23-351.jpg?v=1689345436"
    const jeans_URL = "https://d2j6dbq0eux0bg.cloudfront.net/images/21493407/3488072551.jpg"
    const heelsURL = "https://th.bing.com/th/id/OIP.JYcFWJJrRmiINXNCvy5bZQAAAA?w=385&h=385&rs=1&pid=ImgDetMain"
    const sareesURL = "https://i.pinimg.com/originals/e3/35/a9/e335a9861dc71a9c17f38e4817f0b496.jpg"
    const trousersURL = "https://th.bing.com/th/id/OIP.41aGWazIF_CdxOpV_DYLQAHaHa?pid=ImgDet&w=173&h=173&c=7&dpr=1.1"
    const sneakersURL = "https://ae01.alicdn.com/kf/HTB1_ECxaXkoBKNjSZFEq6zrEVXaB/Women-Running-Shoes-Krasovki-Womens-Sneakers-2018-Sneakers-Women-Zapatillas-Deportivas-Mujer-Running-Shoes-Pink-Size.jpg"
    const HandBagsURL = "https://th.bing.com/th/id/OIP.73ClGYHGReevkne1_hVF7AAAAA?rs=1&pid=ImgDetMain"
    const watches_URL = "https://img.joomcdn.net/8f3f0c280ce325d8756d88d2d5792e0a95dce3c7_original.jpeg"
    return(
        <div className="shop-category">
            <img src={props.banner} />
            <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                <div class="card card-product-list">
                    <Link to={`/${props.category}/watches`}><img src={watches_URL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Watches</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/dresses`}><img src={dressesURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Dresses</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/tops`}><img src={topsURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Tops</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/kurti`}><img src={kurtiURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Kurti</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/jeans`}><img src={jeans_URL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Jeans</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/heels`}><img src={heelsURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Heels</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/sarees`}><img src={sareesURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Sarees</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/sneakers`}><img src={sneakersURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Sneakers</p>
                    </div>
                </div>
                <div class="card card-product-list">
                <Link to={`/${props.category}/handbags`}><img src={HandBagsURL} alt="" /></Link>
                    <div class="card-body">
                        <p class="card-text card-category">Hand Bags</p>
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
                <h3>Showing all {all_products.length} results</h3>
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