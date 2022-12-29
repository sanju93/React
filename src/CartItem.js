import React from 'react';


class Cart extends React.Component{

    // states in React = "its a javascript object"

    constructor() {
        super();
        this.state = {
            price : 999,
            title : "phone",
            Qty : 2,
            img : ""
        }
    }

    increaseQuantity =  () => 
        
 {
    this.setState({Qty : this.state.Qty+1});
 }
   decreaseQuantity = () => {
    this.setState({Qty: this.state.Qty -1});
   } 



   // returns the React element
    render () {

        return (
            <div className='cart-item'>
                <div className='left-block'>

                    <img style={style.image}/>

                </div>
                <div className='right-block'>

                    <div style={ {fontSize:25} }>{this.state.title}</div>
                    <div style={ {color : '#777'} }>Price {this.state.price}</div>
                    <div style={ {color : '#777'} }>Quantity {this.state.Qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/}
                        <img 
                        alt = "increase" 
                        src = "https://cdn-icons-png.flaticon.com/512/3524/3524388.png" 
                        className='action-icons' 
                        onClick={this.increaseQuantity}/>
                        <img 
                        alt = "decrease" 
                        src = "https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                        className='action-icons' 
                        onClick = {this.decreaseQuantity}/>
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