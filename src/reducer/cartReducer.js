import products from "../data/products";

const cartReducer = (state, action) => {
  if (action.type === "CALCULATE_TOTLE") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalprice = price * quantity;
        cartTotal.total += totalprice;
        cartTotal.amount += quantity;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return {
      ...state,
      total,
      amount,
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      products: state.products.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "ADD") {
    let updatepd = state.products.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity++,
        };
      }
      return item;
    });

    return {
        ...state,
        products:updatepd
    }
  }

  if (action.type === "SUB") {
    let updatepd = state.products.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity--,
        };
      }
      return item;
    }).filter((item)=>item.quantity!==0);

    return {
        ...state,
        products:updatepd
    }
  }
};
export default cartReducer;
