import React from 'react';
import Cart from './CartItem';





  const CartItem = (props) => {

    
   
   

    
        const {products} = props;
        return (
            <div className='cart'>
                
                {
                    products.map((products) => {
                        return <Cart 
                        products = {products}  
                        onIncreaseQuantity = {props.onIncreaseQuantity} 
                        onDecreasingQuantity = {props.onDecreasingQuantity}
                        onDeleteProduct = {props.onDeleteProduct} 
                        key = {products.id}
                        />
                    })
                }
              
          
            </div>
        );
    

   



}


export default CartItem;