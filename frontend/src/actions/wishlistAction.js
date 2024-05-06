import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants/wishlistConstants";

const getTokenConfig = () => {
    const token = localStorage.getItem('token'); // Lấy token từ LocalStorage hoặc từ nơi bạn đã lưu trữ token
    return {
        headers: {
            Authorization: `Bearer ${token}` // Thêm token vào header Authorization
        },
    };
};

// Add To Wishlist
export const addToWishlist = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`https://e-commerce-1-v807.onrender.com/api/v1/product/${id}`, getTokenConfig());

        dispatch({
            type: ADD_TO_WISHLIST,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                cuttedPrice: data.product.cuttedPrice,
                image: data.product.images[0].url,
                ratings: data.product.ratings,
                reviews: data.product.numOfReviews,
            },
        });

        localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
    } catch (error) {
        // Xử lý lỗi nếu cần
    }
}

// Remove From Wishlist
export const removeFromWishlist = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: id,
        });

        localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
    } catch (error) {
        // Xử lý lỗi nếu cần
    }
}
