import axios from "axios";
import {
  ALL_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  NEW_ORDER_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  PAYMENT_STATUS_FAIL,
  PAYMENT_STATUS_REQUEST,
  PAYMENT_STATUS_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
} from "../constants/orderConstants";

const getTokenConfig = () => {
  const token = localStorage.getItem("token"); // Lấy token từ LocalStorage hoặc từ nơi bạn đã lưu trữ token
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
    },
  };
};

// New Order
export const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.post(
      "https://e-commerce-2-6yly.onrender.com/api/v1/order/new",
      order,
      config
    );

    dispatch({
      type: NEW_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get User Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.get(
      "https://e-commerce-2-6yly.onrender.com/api/v1/orders/me",
      config
    );

    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.get(
      `https://e-commerce-2-6yly.onrender.com/api/v1/order/${id}`,
      config
    );

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Payment Status
export const getPaymentStatus = (id) => async (dispatch) => {
  try {
    dispatch({ type: PAYMENT_STATUS_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.get(
      `https://e-commerce-2-6yly.onrender.com/api/v1/payment/status/${id}`,
      config
    );

    dispatch({
      type: PAYMENT_STATUS_SUCCESS,
      payload: data.txn,
    });
  } catch (error) {
    dispatch({
      type: PAYMENT_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Orders ---ADMIN
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.get(
      "https://e-commerce-2-6yly.onrender.com/api/v1/admin/orders",
      config
    );

    dispatch({
      type: ALL_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Order ---ADMIN
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.put(
      `https://e-commerce-2-6yly.onrender.com/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Order ---ADMIN
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });
    const config = getTokenConfig();

    const { data } = await axios.delete(
      `https://e-commerce-2-6yly.onrender.com/api/v1/admin/order/${id}`,
      config
    );

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
