import React, {useState , useContext } from "react";
import "./NavBar.css"
import { Link } from "react-router-dom"
import { ShopContext } from "../../ContextAPI/ShopContext";
import { AuthContext } from "../../ContextAPI/authContext";
import '../NavBar/NavBar.css';
import all_products from "../../ContextAPI/All_Product";
import men_data from "../../ContextAPI/MenCategory";
export default function NavBar(){
    let [menu,setMenu] = useState("")
    let [search,setSearch] = useState("")
    const {getTotalCartItem} = useContext(ShopContext);
    const { isAuthenticated, logout } = useContext(AuthContext);
    let allData = [...all_products, ...men_data];
    const onSearch = (searchItem) => {
        setSearch(searchItem);
        console.log('search', searchItem);
    }
    const navStyles = {
        textDecoration:"none",
        color:'black'
    }
    return (
        <>
        <nav class="navbar navbar-expand-md bg-body-tertiary bottom-border sticky-top">
            <div className="container-fluid">
                <a class="navbar-brand" href="/"><i class="fa-solid fa-scale-unbalanced-flip"></i><h6>Shopify</h6></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <form class="d-flex flex-grow-1 position-relative" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input class="form-control me-3 search-inp flex-grow-1" type="search" placeholder="Search For Products" value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search"/>
                            <button className="btn btn-search" type="submit" onClick={()=> onSearch(search)}><i class="fa-solid fa-magnifying-glass"></i></button>
                            {search.trim() !== "" && all_products.length > 0 && (
                            <div className="search-dropdown">
                                {allData.filter(item => {
                                    const input = search.toLowerCase();
                                    const name = item.full_name.toLowerCase();
                                    return input && name.startsWith(input) && name !== input;
                                }).slice(0,10)
                                .map((item) => (
                                    <Link to={`product/${item.id}`} style={{textDecoration:"none", color:"black"}}><li key={item.id} className="dropdown-list" onClick={() => onSearch(item.full_name)}>
                                        {item.full_name}
                                    </li></Link>
                                ))}
                            </div>
                        )}
                        </form>
                    </div>
                    {/* <div class="container-fluid"> */}
                        <div class="navbar-nav nav-list">
                            <a class="nav-link active" aria-current="page" onClick={()=>{setMenu("Home")}}><Link style={navStyles} to='/'>Home&nbsp;</Link>{menu==="Home"?<i class="fa-solid fa-caret-down"></i>:<></>}</a>
                            <a class="nav-link" onClick={()=>{setMenu("Men")}}><Link style={navStyles} to='/men'>Men&nbsp;</Link>{menu==="Men"?<i class="fa-solid fa-caret-down"></i>:<></>}</a>
                            <a class="nav-link" onClick={()=>{setMenu("Women")}}><Link style={navStyles} to='/women'>Women&nbsp;</Link>{menu==="Women"?<i class="fa-solid fa-caret-down"></i>:<></>}</a>
                            <a class="nav-link" onClick={()=>{setMenu("Kids")}}><Link style={navStyles} to='/kids'>Kids&nbsp;</Link>{menu==="Kids"?<i class="fa-solid fa-caret-down"></i>:<></>}</a>
                            { isAuthenticated? (
                                <>
                                <button className="btn btn-signin" onClick={logout}>Logout</button>
                                {/* <div className="cart-logo"><i class="fa-solid fa-bag-shopping"></i></div> */}
                                </>
                            ) : (
                                <>
                                <Link to="/signin"><button className="btn btn-signin"><i class="fa-regular fa-user"></i><b>SignUp</b></button></Link>
                                <Link to="/login"><button className="btn btn-signin">Login</button></Link>
                                </>
                            )} 
                            <a class="nav-link cart-logo position-relative"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span class="position-absolute top-20 start-60 translate-middle badge border border-light rounded-circle bg-dark p-2">{getTotalCartItem()}</span></Link></a>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse nav-bottom" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link style={navStyles} to="/Best-Deals"><li class="nav-item nav-link" >Today's Deals</li></Link>
                        <Link style={navStyles} to="/bestsellers"><li class="nav-item nav-link">BestSellers</li></Link>
                        <Link style={navStyles}  to="/smartphones"><li class="nav-item nav-link">Mobiles</li></Link>
                        <Link style={navStyles} to="/fashion"><li class="nav-item nav-link">Fashion</li></Link>
                        <Link style={navStyles} to="/electronics"><li class="nav-item nav-link">Electronics</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    )
}

