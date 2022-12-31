import React from 'react';
import Cart from './CartItem';




class CartItem extends React.Component{


    
    constructor() {
        super();
        this.state = {
            products : [
             {
                price : 20000,
                title : "phone",
                Qty : 2,
                img : "",
                id  : 1
            },
            {
                price : 999,
                title : "Watch",
                Qty : 2,
                img : "",
                id : 2
            }, 
            {
                price : 70000,
                title : "Laptop",
                Qty : 2,
                img : "",
                id : 3
            }
        ]
    }

   
        
    }
    increaseQuantity = (product) => {
        
      const{products} = this.state;
      const index = products.indexOf(product);
    products[index].Qty += 1;
    this.setState({products : products});

        
    }

    decreasingQuantity = (product) => {

        

       const {products} = this.state;
       const index = products.indexOf(product);

       if (products[index].Qty === 0){
            return;
       }
       products[index].Qty -= 1;
       this.setState({products : products});

    }
   

    render () {
        const {products} = this.state;
        return (
            <div className='cart'>
                
                {
                    products.map((products) => {
                        return <Cart product = {products}  onIncreaseQuantity = {this.increaseQuantity} onDecreasingQuantity = {this.decreasingQuantity} key = {products.id}/>
                    })
                }
              
          
            </div>
        );
    }

   



}


export default CartItem;