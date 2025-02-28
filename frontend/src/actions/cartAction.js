import axios from "axios";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

const getTokenConfig = () => {
  const token = localStorage.getItem("token"); // Lấy token từ LocalStorage hoặc từ nơi bạn đã lưu trữ token
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
    },
  };
};

// add to cart
export const addItemsToCart =
  (id, quantity = 1) =>
  async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://e-commerce-2-6yly.onrender.com//api/v1/product/${id}`,
        getTokenConfig()
      );

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data.product._id,
          name: data.product.name,
          seller: data.product.brand.name,
          price: data.product.price,
          cuttedPrice: data.product.cuttedPrice,
          image: data.product.images[0].url,
          stock: data.product.stock,
          quantity,
        },
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      // Xử lý lỗi nếu cần
    }
  };

// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    // Xử lý lỗi nếu cần
  }
};

// empty cart
export const emptyCart = () => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPTY_CART });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    // Xử lý lỗi nếu cần
  }
};

// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
  } catch (error) {
    // Xử lý lỗi nếu cần
  }
};
