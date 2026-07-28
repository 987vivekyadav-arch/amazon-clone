import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";

import Cart from "./Cart";
function App(){
const[cart, setCart] = React.useState([]);
const[search, setSearch] = React.useState("");
const[categories, setCategories] = React.useState("All");

    return(
        <div>
            <Navbar
            search={search}
            setSearch={setSearch}
            ></Navbar>
            <Hero></Hero>
            <Categories
            categories={categories}
            setCategories={setCategories}
            ></Categories>
            <Products 
            cart={cart}
            setCart={setCart}
            search={search}
            setSearch={setSearch}
            categories={categories}
            setCategories={setCategories}
            ></Products>
            
            <Cart
            cart={cart}
            setCart={setCart}
            ></Cart>
        </div>
    )
}export default App;