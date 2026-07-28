import React from 'react';

import "./css/ProductCard.css"
function ProductCard({ item, cart, setCart}) {return (
    <div className='product-card'>
<img src="product-image.jpg" alt="Product Image"></img>

<h3>{item.name}</h3>

<p>{item.id}</p>
<p>{item.price}</p>
<button onClick={function(){
    setCart([...cart,{...item,quantity:1}]);
}}

>Add to Cart</button>
    </div>);
}export default ProductCard;


