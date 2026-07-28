import React from "react";
import "./css/Navbar.css";

function Navbar({search, setSearch}){
return( 
<div className="navbar">
<h1> 🛒AMAZON</h1>
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
<button
> 🔍SEARCH</button>
<h2>🛒CART</h2>
</div>
)
}export default Navbar;