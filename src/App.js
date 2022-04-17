

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import  Drawer  from '@material-ui/core/Drawer'
import './App.css';
import LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { queryByRole } from '@testing-library/dom';
var exist=null;
var arr=[]
  var arr1=[]
function App() {
 // const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [itemshop,setItemshop]= useState([]);
  const [cartOpen,setCartOpen]= useState(false)
  const [unique,setUnique]= useState(1)
  
  const ChangeHeader=(product)=>{
    console.log(product)

  }
  const FetchData=async()=>{
    const res = await axios.get(
    `https://fakestoreapi.com/products`
  )
  console.log(res.data)
setCartItems(res.data)
console.log(cartItems)
//  return res.data
}
useEffect(()=>{
FetchData()


},[])

console.log(cartItems)
  const onAdd = (product) => {
   
  //   setUnique(product.id) 
  // cartItems.map(el=>
   
  //   el.id === product.id && product.id !=unique  ? arr.push(el)
  
  //   : el )
    
   

   // cartItems.length=77
    exist = cartItems.find((x) => x.id === product.id);
   console.log(exist)
   if (exist) {
     setCartItems(
       cartItems?.map((x) =>
      
        //  x.id === product.id ?{ ...exist,qty:exist.qty ? parseInt( exist.qty) + 1 : 1 } 
        x.id === product.id ?{ ...exist,qty:exist.qty ? parseInt( exist.qty) + 1 : 1 } 
         
           
         
         : x
       )
       
     );
    
   // cart.push(exist)
   } else {
     setCartItems([...cartItems,exist.qty ? parseInt(exist.qty):1])
    //  setCartItems([...cartItems, { ...product, qty: 1 }]);
   }
  console.log("added items")
 // console.log(cart)
    setUnique(product.id) 
  cartItems.map(el=>
   
    el.id === product.id && product.id !=unique  ? arr.push(el)
  
    : el )
    
  ChangeHeader(product)
  };

  const onRemove = (product) => {
     exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty:exist.qty ? exist.qty - 1: exist.qty } : x
        //   x.id===product.id ? { ...exist,qty:exist.qty ? parseInt( exist.qty) - 1 
        // : x
        //   }
     // );
        ))
            }
           
     // arr=[]
    }
  

  const getTotalItems=()=>
     cartItems.reduce((ack,item)=> ack + (item.qty ?? 0),0)
   
 // const GetAmount= cartItems.reduce(ack,item)=> ack +item.qty,0)
 console.log({cartItems}) 
const onadd1=(product)=>{
  exist = cartItems.find((x) => x.id === product.id);
  console.log(exist)
  if (exist) {
    setCartItems(
      cartItems?.map((x) =>
     
         x.id === product.id ?{ ...exist,qty:exist.qty ? parseInt( exist.qty) + 1 : 1 } 
    //   x.id === product.id ?{ ...exist,qty:exist.qty ? parseInt( exist.qty) + 1 : 1 } 
        
          
        
        : x
      )
      
    );
   
  // cart.push(exist)
  } else {
    setCartItems([...cartItems,exist.qty ? parseInt(exist.qty):1])
   //  setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
 console.log("added items")

}

 return (
    <>
    <div className="wrapper">
     
     <Header countCartItems={getTotalItems()}>
    
       </Header>  
       <button onClick={()=>
       setCartOpen(true)
     }> 
     <Badge badgeContent={getTotalItems()} color="error">
       <AddShoppingCartIcon/>
     
     </Badge>
    
     </button>
</div>
<div className="wrapper">
     
        <div className="item">
        <Main products={cartItems} onAdd={onAdd} ></Main>
        </div>
   <div className="item7">
   <Drawer anchor="right" open ={cartOpen} onClose={()=>{
       setCartOpen(false)
     }}>
       <Basket
          arr={[...arr]}
          onAdd={onAdd}
          unique={unique}
         // cart={()=>setCartItems(arr1)}
          onRemove={onRemove}
        ></Basket>
      
        </Drawer>
      
       
      </div>
      </div>
    
    </>
  );
}

export default App;
