import React from 'react';



class Cart extends React.Component {

    render () {

        const {Qty = 5,price,title,img} = this.props.product;

        
  

        return (


          
            <div className='cart-item'>
                <div className='left-block'>

                    <img style={style.image}/>

                </div>
                <div className='right-block'>

                    <div style={ {fontSize:25} }> Title {title}</div>
                    <div style={ {color : '#777'} }>Price {price}</div>
                    <div style={ {color : '#777'} }>Quantity {Qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/}
                        <img 
                        alt = "increase" 
                        src = "https://cdn-icons-png.flaticon.com/512/3524/3524388.png" 
                        className='action-icons' 
                        onClick={() => this.props.onIncreaseQuantity(this.props.product)}/>
                        <img 
                        alt = "decrease" 
                        src = "https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                        className='action-icons' 
                        onClick = {() => this.props.onDecreasingQuantity(this.props.product)}/>
                        <img 
                        alt = "delete" 
                        src = "https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        className='action-icons' />

                    </div>

                </div>

            </div>
        );

    }

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