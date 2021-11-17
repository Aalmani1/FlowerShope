const initialState = {
    cart: [],
  };
  
  const cartsitem = (state = initialState, { type, payload }) => {
    switch (type) {

      case "ADD_cart":
        return { cart: [...state.cart, payload] };
      case "REMOVE_cart":
        return {
            cart: state.cart.filter((element) => {
            return element.id !== payload.id;
          }),
        };
      case "TOTAL":
        let total;
        return {
          cart: state.cart.filter((element) => {
          total += element.price;
        }),
      };
      default:
        return state;
    }
  };
  
  export default cartsitem;
  
  export const addcart = (cart) => {
    return {
      type: "ADD_cart",
      payload: cart,
    };
  };
  
  
  export const removecart = (cart) => {
    return {
      type: "REMOVE_cart",
      payload: cart,
    };
  };

  export const totalcart = (cart) => {
    return {
      type: "TOTAL",
      payload: cart,
    };
  };