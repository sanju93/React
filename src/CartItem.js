import React from 'react';



const Cart = (props) => {

  

       

        
  

        return (


          
            <div className='cart-item'>
                <div className='left-block'>

                    <img style={style.image}/>

                </div>
                <div className='right-block'>

                    <div style={ {fontSize:25} }> {props.products.title}</div>
                    <div style={ {color : '#777'} }>Price {props.products.price}</div>
                    <div style={ {color : '#777'} }>Quantity {props.products.Qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/}
                        <img 
                        alt = "increase" 
                        src = "https://cdn-icons-png.flaticon.com/512/3524/3524388.png" 
                        className='action-icons' 
                        onClick={() => props.onIncreaseQuantity(props.products)}/>
                        <img 
                        alt = "decrease" 
                        src = "https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                        className='action-icons' 
                        onClick = {() => props.onDecreasingQuantity(props.products)}/>
                        <img 
                        alt = "delete" 
                        src = "https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        className='action-icons' 
                        onClick={() => props.onDeleteProduct(props.products.id)}/>

                    </div>

                </div>

            </div>
        );

    

}

const style = {
    image: {
        height : 110,
        width : 100,
        borderRadius : 4,
        backgroundColor : '#777'
    }
}



export default Cart;