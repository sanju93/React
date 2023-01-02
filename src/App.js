import React from 'react';
import CartItem from './Cart';

import NavBar from './Navbar';


class App extends React.Component {
 
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

deleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id != id);
    // console.log(items);

    this.setState({products : items});


}

SetCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {

    count += product.Qty;

  })
  return count;
}

AddTotalPrice = () => {

  const {products} = this.state;
  let sum = 0;
  products.map((product) => {

    sum = sum + product.Qty * product.price;


  })

  return sum;

}
render(){
  const {products} = this.state;
        return (
          <div className="App">
            <div><NavBar
            count = {this.SetCartCount()}/></div>
            <div><CartItem
            products = {products}
            onIncreaseQuantity = {this.increaseQuantity}
            onDecreasingQuantity = {this.decreasingQuantity}
            onDeleteProduct = {this.deleteProduct}/></div>
            <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.AddTotalPrice()} </div>
          </div>
           
        );
      }
}

export default App;
