import React from 'react';
import "./css/Products.css"
import ProductCard from './ProductCard';

function Products({ cart, setCart, search, setSearch, categories, setCategories }) {
const products = [
  { id: 1, name: "Laptop", price: 999.99, categories: "Electronics" },
  { id: 2, name: "Phone", price: 699.99, categories: "Electronics" },
  { id: 3, name: "Watch", price: 299.99, categories: "Accessories" },
  { id: 4, name: "Headphones", price: 199.99, categories: "Accessories" },
  { id: 5, name: "Books", price: 29.99, categories: "Books" },
  { id: 6, name: "T-Shirt", price: 19.99, categories: "Clothing" }
];
    return (

        <div className='products'>
            <h2>Our Products</h2>
          
          {products.filter(function(product){
            return product.name.toLowerCase().includes(search.toLowerCase())})
            .filter(function(product){
 if(categories === "All"){return true} else {return product.categories === categories}


          })
            .map(function(product){return(
              <ProductCard
               item={product}
                cart={cart}
                setCart={setCart}
              ></ProductCard>

            )})}
            
        </div>
    )
}export default Products;