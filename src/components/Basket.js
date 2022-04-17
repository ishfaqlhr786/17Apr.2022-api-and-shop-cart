import { ContactlessOutlined } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
//import Header from './Header';
export default function Basket(props) {
  const { arr, onAdd, onRemove,unique } = props;
  const list=[...arr]
  console.log(arr)
  console.log("unique is",unique)
  const [items,setItems]= useState([])
 // const [unique,setUnique]= useState(0)
  console.log(arr)
useEffect(()=>{

})
console.log("uniques id =",unique)
  return(<>
  <div style={{width:"400px"}}>
    {arr.length}
   {arr.length ===0 && <div>Cart is empty</div>} 
  {
  
  arr.map((el,index)=>(
   
   
    <div key={el.id} >
     
   <h4>{el.id}</h4>

        <img src={el.image} alt="ll"  height="100px" width="100px"/>
        <h3>{el.category}</h3>
        <div className="col-21">
              <button onClick={() => onRemove(el)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(el)} className="add">
                +
              </button>
            </div>
            <div className="col-21 text-right">
              {(el.qty??0)} x ${el.price.toFixed(2)}
             
            </div>
           
          


        </div>
    
      // </>)
    
  ))
   
  }
  </div>

  </>)
}
  
 
 