import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/CategoryItems.css';
import CategoryItem from "../../Components/Items/CategoryItems";
import all_products from "../../data/All_Product";
import defaultImg from '../../assets/Images/image.png';
import MEN_BANNERS from "../../constants/MEN_BANNER.jpg";
import { useParams, Link } from "react-router-dom";

export default function MenCategories() {
    const { subcategory } = useParams();
    const navigate = useNavigate();
  
    const handleClick = (category, subcategory, productId) => {
        navigate(`/${category}/${subcategory}/${productId}`);
    };

    const fallback = (e) => { e.target.src = defaultImg; };

    const categories = {
        shirts: "https://i.pinimg.com/originals/72/c6/be/72c6be72e26904f53f1a042057f01c61.jpg",
        tshirts: "https://ae01.alicdn.com/kf/HTB1nR3uGWmWBuNjy1Xaq6xCbXXaE/casual-men-s-t-shirt-new-short-sleeved-Summer-Retro-Style-Synthwave-Graphic-Logo-Design-printing.jpg",
        shoes: "https://ae01.alicdn.com/kf/H25a36e5dfdb243bf93a08b34bd3f41376/Men-Business-Casual-Shoes-PU-Leather-Running-Shoes-Fashion-Lace-Up-Casual-Sneakers-Male-Outdoor-Walking.jpg",
        jeans: "https://images.bewakoof.com/t320/men-s-blue-jeans-mid-blue-624672-1706594218-1.jpg",
        ethnics: "https://shaadiwish.com/blog/wp-content/uploads/2023/10/2.-Samoh-India-Has-Chic-Festive-Season-Menswear-1-300x300.jpeg",
        blazers: "https://ae01.alicdn.com/kf/HTB1PMdeSVXXXXXNaXXXq6xXFXXXl/2017-designer-men-Suit-Jackets-Autumn-Slim-blazer-masculino-casual-Blazer-men-high-quality-Business-dress.jpg",
        watches: "https://ae01.alicdn.com/kf/HTB1kRYBXiHrK1Rjy0Flq6AsaFXa6/Geneva-Mens-Watch-Date-Stainless-Steel-Leather-Analog-Alloy-Quartz-Wrist-Watch-Waterproof-Military-Sports-Watches.jpg",
        earbuds: "https://m.media-amazon.com/images/I/61PULZm67sL._AC_UF894,1000_QL80_.jpg",
        formals: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/02/Formal-Dress-Code-in-2024.jpg",
        trousers: "https://ae01.alicdn.com/kf/HTB1c5R1QpXXXXanapXXq6xXFXXXo/Plus-Size-28-36-Men-s-Casual-Pants-Slim-Fit-Gray-Straight-Pants-Men-Fashion-Red.jpg",
    };

    // Filter products
    const filteredProducts = all_products.filter(item => {
        const itemCategory = item.category ? item.category.toLowerCase() : "";
        const itemSubcategory = item.subcategory ? item.subcategory.toLowerCase() : "";
        if (!subcategory) return itemCategory === "men"; // all men products
        return itemCategory === "men" && itemSubcategory === subcategory.toLowerCase();
    });

    return (
        <div className="shop-category">
            <img src={MEN_BANNERS} alt="Category Banner" onError={fallback} />
            {/* Subcategory cards */}
            <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
            {Object.keys(categories).map((subcat) => (
            <div className="card card-product-list" key={subcat}>
                <Link to={`/men/${subcat}`}>
                <img src={categories[subcat]} alt={subcat} onError={fallback} />
                </Link>
                <div className="card-body">
                <p className="card-text card-category">{subcat.charAt(0).toUpperCase() + subcat.slice(1)}</p>
                </div>
            </div>
        ))}
            </div>

            {/* Products List */}
            <div className="SortByProducts">
                <h3>Showing {filteredProducts.length} results</h3>
            </div>
            <div className="list-category row row-cols-lg-6 row-cols-md-3 row-cols-sm-1">
                {filteredProducts.length === 0 ? (
                    <p>Products Not Found!</p>
                ) : (
                    filteredProducts.map((item, i) => (
                        <CategoryItem
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image || defaultImg}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            discount={item.discount}
                            category={item.category}
                            subcategory={item.subcategory}
                            onClick={() =>
                                handleClick(item.category, item.subcategory, item.id)
                            }
                        />
                    ))
                )}
            </div>
        </div>
    );
}
