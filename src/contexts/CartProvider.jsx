// Code: CartProvider.jsx
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addToCart": {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart?.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  price: item.price * item.quantity,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: action.payload.quantity,
              price: action.payload.price,
            },
          ],
        };
      }
    }
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart?.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                // price: item.price * item.quantity,
              }
            : item
        ),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart?.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                // price: item.price * item.quantity,
              }
            : item
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error("Unknown action");
  }
}

function CartProvider({ children }) {
//   const [{ cart }, dispatch] = useReducer(reducer, initialState);
  const [{ cart }, dispatch] = useReducer(reducer, initialState, (initial) => {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? { ...initial, cart: JSON.parse(storedCart) }
      : initial;
  });

  // Local Storage Sync
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
