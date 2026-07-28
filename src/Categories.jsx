import React from 'react';
import "./css/Categories.css";
function Categories({categories, setCategories}) {
    return (
        <div className='categories'>
            <h2>Categories</h2>
            <ul>
                <button onClick={function(){
    setCategories("All");
}}>All</button>

<button onClick={function(){
    setCategories("Electronics");
}}>Electronics</button>

<button onClick={function(){
    setCategories("Accessories");
}}>Accessories</button>

<button onClick={function(){
    setCategories("Books");
}}>Books</button>

<button onClick={function(){
    setCategories("Clothing");
}}>Clothing</button>
            </ul>
        </div>
    );
}
export default Categories;
