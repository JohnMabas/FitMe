import {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  // ==========================================
  // ADD TO CART
  // ==========================================

  function addToCart(recipe) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === recipe.id
      );

      // Already in cart
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === recipe.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // New item
      return [
        ...prevCart,
        {
          ...recipe,
          quantity: 1,

          // You can change this later
          price: 200,
        },
      ];
    });
  }


  // ==========================================
  // INCREASE QUANTITY
  // ==========================================

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }


  // ==========================================
  // DECREASE QUANTITY
  // ==========================================

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  }


  // ==========================================
  // TOTAL NUMBER OF ITEMS
  // ==========================================

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  // ==========================================
  // SUBTOTAL
  // ==========================================

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        item.quantity,
    0
  );


  // ==========================================
  // CONTEXT
  // ==========================================

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        totalItems,

        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


// ==========================================
// USE CART
// ==========================================

export function useCart() {
  return useContext(CartContext);
}