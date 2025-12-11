import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [foods, setFoods] = useState([]);
  const [token, setToken] = useState("");

  const url = "http://localhost:4000";

  const fetchFoods = async () => {
    try {
      const res = await axios.get(url + "/api/foods/list");
      console.log("FOOD LIST RESPONSE:", res.data);
      setFoods(res.data.data);
    } catch (err) {
      console.error("Failed fetching food list:", err);
    }
  };

  const loadCartData = async () => {
    if (token) {
      try {
        const res = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        if (res.data.success) {
          setCartItems(res.data.cartData);
        }
      } catch (error) {
        console.error("Failed to load cart data:", error);
      }
    }
  };

  const addToCart = async (itemId) => {
    const prevCart = { ...cartItems };
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      } catch (error) {
        console.error("Failed to add to cart:", error);
        setCartItems(prevCart); // rollback on failure
      }
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] > 0) {
      const prevCart = { ...cartItems };
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));

      if (token) {
        try {
          await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        } catch (error) {
          console.error("Failed to remove from cart:", error);
          setCartItems(prevCart); // rollback on failure
        }
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoods();

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        // Load cart data after setting token
        try {
          const res = await axios.post(url + "/api/cart/get", {}, { headers: { token: storedToken } });
          if (res.data.success) {
            setCartItems(res.data.cartData);
          }
        } catch (error) {
          console.error("Failed to load cart data:", error);
        }
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    loadCartData();
  }, [token]);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const qty = cartItems[itemId];
      if (qty > 0) {
        const item = foods.find((f) => f._id === itemId);
        if (item) total += item.price * qty;
      }
    }
    return total;
  };

  return (
    <StoreContext.Provider
      value={{
        foods,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
