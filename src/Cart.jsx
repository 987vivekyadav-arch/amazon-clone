 import React from 'react';
 import "./css/Cart.css";
 function Cart({cart
, setCart
 }){ const total=cart.reduce(function(total,item){
return total+item.price*item.quantity

 },0)





     return(
         <div className="cart">
             <h1>Cart</h1>
             <p>Total: ${total
                }</p>
                {cart.map(function(item){return(

       <div key={item.id}>           
<h3>{item.name}</h3>
<p>{item.price}</p>
<button onClick={function(){

 const newCart=cart.filter(function(cartItem){
    return(cartItem.id!==item.id)
})
setCart(newCart);

    

}}

>DELETE</button>
<button onClick={function(){
    const newCart=cart.map(function(cartItem){
        if(cartItem.id===item.id){
            return({...cartItem,quantity:cartItem.quantity-1})          
        }else{
            return cartItem;
        }
    })
    setCart(newCart);
}}
>[-]</button>
<span>{item.quantity}</span>
<button onClick={function(){
    const newCart=cart.map(function(cartItem){
        if(cartItem.id===item.id){
            return({...cartItem,quantity:cartItem.quantity+1})
        }else{
            return cartItem;
        }
    })
    setCart(newCart);
}}
>[+]</button>

       </div>           );})}

         </div>
     );
 }export default Cart;
     
