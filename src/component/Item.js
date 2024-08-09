import "./Item.css"
import { useCart } from "../context/CartContext";

export default function Item(props) {
  const  {id,name,price,image,quantity,} = props
  const {formatMoney,removeItem,addItem,subItem} = useCart();
  return (
  <div className="card">
  <img src={image} alt={image} />
  <div className="product">
  <p className="name">ชื่อ : {name}</p>
  <p className="price">ราคา : {formatMoney(price)}</p>

  </div>
    <div className="quantity">
        <button onClick={()=>addItem(id)}>+</button>
        <input type="text" value={quantity} disabled/>
        <button onClick={()=>subItem(id)}>-</button>
    </div>
    <div className="total-price">{formatMoney(quantity*price)}</div>
    <button onClick={()=>removeItem(id)}>ลบสินค้า</button>
  </div>
  

);
}
