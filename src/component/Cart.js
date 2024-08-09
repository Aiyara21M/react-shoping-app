import Item from "./Item";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { products, total, amount, formatMoney } = useCart();

  return (
    <div className="Cart">
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}

      <h2
        style={{
          textAlign: "right",
          padding: "30px",
          color: "rgb(206, 119, 119)",
          border: "1px solid pink",
        }}
      >
        {products.length > 0
          ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
          : `ไม่มีสินค้าในตระกร้า`}
      </h2>
    </div>
  );
}
