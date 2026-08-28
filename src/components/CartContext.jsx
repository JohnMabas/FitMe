import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(recipe) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === recipe.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === recipe.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...recipe,
          quantity: 1,

          price: 200,
        },
      ];
    });
  }


  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }


  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  );


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


export function useCart() {
  return useContext(CartContext);
}
