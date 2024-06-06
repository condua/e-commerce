import React from "react";

const PriceSidebar = ({ cartItems }) => {
    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">Chi tiết giá trị đơn hàng</h1>

                <div className="flex flex-col gap-4 p-6 pb-3">
                    <p className="flex justify-between">Giá ({cartItems.length} item) <span>{cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0).toLocaleString()} ₫</span></p>
                    <p className="flex justify-between">Khuyến mãi <span className="text-primary-green">- {cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()} ₫</span></p>
                    <p className="flex justify-between">Phí vận chuyển <span className="text-primary-green">FREE</span></p>

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Tổng tiền <span>{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()} ₫</span></p>
                    <div className="border border-dashed"></div>

                    <p className="font-medium text-primary-green">Bạn đã tiết kiệm được {cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()} ₫ trong đơn hàng này</p>

                </div>

            </div>
            {/* <!-- nav tiles --> */}

        </div>
    );
};

export default PriceSidebar;
