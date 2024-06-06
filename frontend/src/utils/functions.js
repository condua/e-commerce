export const getDiscount = (price, cuttedPrice) => {
    return (((cuttedPrice - price) / cuttedPrice) * 100).toFixed();
}

export const getDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(new Date().getDate() + 7);

    const vietnamOffset = 7 * 60; // 7 hours in minutes
    const localOffset = deliveryDate.getTimezoneOffset();
    const vietnamTime = new Date(deliveryDate.getTime() + (vietnamOffset + localOffset) * 60000);

    const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    const monthsOfYear = ["tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6", "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"];

    const dayOfWeek = daysOfWeek[vietnamTime.getDay()];
    const day = vietnamTime.getDate().toString().padStart(2, '0');
    const month = monthsOfYear[vietnamTime.getMonth()];
    const year = vietnamTime.getFullYear();

    return `${dayOfWeek}, ngày ${day} ${month} năm ${year}`;
}



export const formatDate = (dt) => {
    return new Date(dt).toUTCString().substring(0,16);
}

export const getRandomProducts = (prodsArray, n) => {
    return prodsArray.sort(() => 0.5 - Math.random()).slice(0, n)
}