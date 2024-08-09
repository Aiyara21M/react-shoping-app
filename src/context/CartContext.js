import {  createContext,useContext,useReducer,useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";

const initState ={
    products:products,
    total:0,
    amount:0,
}
const CartContext = createContext();



export const CartProvider = ({children})=>{
  const[state,dispatch] = useReducer(cartReducer,initState);

  function removeItem(id) {
      
      dispatch({type:"REMOVE",payload:id})
  }

  function addItem(id) {
     
    dispatch({type:"ADD",payload:id})
}

function subItem(id) {
     
  dispatch({type:"SUB",payload:id})
}



  function formatMoney(money){
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

useEffect(()=>{
console.log("หาผลรวม");
dispatch({type:"CALCULATE_TOTLE"})

},[state.products])

  return(
    <CartContext.Provider value={{...state,formatMoney,removeItem,addItem,subItem}}>
        {children}
    </CartContext.Provider>
  )
};



export const useCart=()=>{
    return useContext(CartContext);
};



