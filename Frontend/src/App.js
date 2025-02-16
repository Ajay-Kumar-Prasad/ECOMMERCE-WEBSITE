import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Cart from "./Pages/Cart/CartItems.jsx"
import Categories from "./Pages/Categories"
import Product from "./Pages/ProductPage/Products.jsx"
import SignUp from "./Pages/SignUp"
import Login from './Pages/Login.jsx';
import MenCategories from './Pages/MenCategory/MenCategories.jsx';
import WomenCategories from "./Pages/WomenCategory/WomenCategories.jsx";
import Listing from './Pages/MenCategory/Listing.jsx';
import MiNotebook from './Pages/Banners/MiNotebook.jsx';
import Headphones from './Pages/Banners/BoatHeadphones.jsx';
import axios from 'axios';
import { AuthProvider } from './ContextAPI/authContext.jsx';
import men_banner from './ContextAPI/assets/MEN_BANNER.jpg'
import API_BASE_URL from './config.js';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://ecommerce-website-bprc.onrender.com/api/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);
  let women_banner = "https://www.samyakk.com/blog/wp-content/uploads/2023/03/MAIN-BANNER-lehenga.jpg"
  let kids_banner = "https://cdn.vectorstock.com/i/500p/65/74/ad-banner-design-for-kids-clothes-store-promo-vector-43676574.jpg"
  let trousersUrl = "https://www.artless-store.com/cdn/shop/collections/e63e4d03adef96f99de73b60f9e2ea50_1376x416_a34eea3d-a267-4a29-9085-9c2097e4c8f3.jpg?v=1704529624"
  let blazersUrl = "https://cdn.shopify.com/s/files/1/2027/6273/files/3for2_banner_1024x1024.jpg?v=1724524295"
  let earbudsUrl = "https://store.hifiman.com/media/catalog/category/Earphones_banner_1.jpg"
  let ethnicsUrl = "https://ethnicity.in/cdn/shop/files/Men-Banner_1_1024x1024.jpg?v=1737635693"
  let formalsUrl = "https://theformalclub.in/cdn/shop/files/Fulkl-SLEVVEESSS_74f73ad8-8779-4f5c-9d89-c70fb07ff625.jpg?v=1721209695"
  let jeansUrl = "https://www.wamdenim.com/media/wysiwyg/JEANS_18.WEBP"
  let shirtsUrl = "https://theformalclub.in/cdn/shop/files/NEW-COLLECTION-BANNER-23_2.jpg?v=1721304243&width=3600"
  let shoesUrl = "https://th.bing.com/th/id/R.e70226b7efdbf3258e83fd98150263cb?rik=PkXL3K%2f48fh8fw&riu=http%3a%2f%2fs7d4.scene7.com%2fis%2fimage%2fboombah%2ffootwear-mens-banner-2%3f%24fullsize%24&ehk=56wCulEgRtWoXOqW7lHar78OOl7J0B3XJZUlr3aGkkk%3d&risl=&pid=ImgRaw&r=0"
  let tshirtsUrl = "https://www.beyoung.in/blog/wp-content/uploads/2024/06/T-Shirts-Styles-for-Men-blog-banner.jpg"
  let watchesUrl = "https://static.helioswatchstore.com/media/brand_directory/all.png"

  return (
    <AuthProvider>
      <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className='Nav-hidden'></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/men' element={<MenCategories banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<WomenCategories banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Categories banner={kids_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signin' element={<SignUp/>}/>
          <Route path='/login' element= {<Login/>} />
          <Route path='/Mi-Notebook' element={<MiNotebook/>}></Route>
          <Route path='/boat-headphones' element={<Headphones/>}></Route>
          <Route path='/men/shirts' element={<Listing url={shirtsUrl} listname="men-shirts" />}/>
          <Route path='/men/tshirts' element={<Listing url={tshirtsUrl} listname="men-tshirts" />}/>
          <Route path='/men/shoes' element={<Listing url={shoesUrl} listname="men-shoes" />}/>
          <Route path='/men/jeans' element={<Listing url={jeansUrl} listname="men-jeans" />}/>
          <Route path='/men/ethnics' element={<Listing url={ethnicsUrl} listname="men-ethnics" />}/>
          <Route path='/men/blazers&suits' element={<Listing url={blazersUrl} listname="men-blazers" />}/>
          <Route path='/men/earbuds' element={<Listing url={earbudsUrl} listname="men-earbuds" />}/>
          <Route path='/men/formals' element={<Listing url={formalsUrl} listname="men-formals" />}/>
          <Route path='/men/trousers' element={<Listing url={trousersUrl} listname="men-trousers" />}/>
          <Route path='/men/watches' element={<Listing url={watchesUrl} listname="men-watches" />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>

  );
}
export default App;

