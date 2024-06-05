import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
// import {
//     CardNumberElement,
//     CardCvcElement,
//     CardExpiryElement,
//     useStripe,
//     useElements,
// } from '@stripe/react-stripe-js';
import { clearErrors } from '../../actions/orderAction';
import { useSnackbar } from 'notistack';
import { post } from '../../utils/paytmForm';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MetaData from '../Layouts/MetaData';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../actions/cartAction';
import zalopay from '../../assets/images/zalopay.png'

const Payment = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    // const stripe = useStripe();
    // const elements = useElements();
    // const paymentBtn = useRef(null);
    const [method, setMethod] = useState(''); // Khởi tạo state

    const [payDisable, setPayDisable] = useState(false);

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const paymentData = {
        amount: Math.round(totalPrice),
        email: user.email,
        phoneNo: shippingInfo.phoneNo,
    };

    const order = {
        shippingInfo,
        orderItems: cartItems,
        totalPrice,
    }

    const amount = order.shippingInfo.totalPrice;
    const reqData = {
        app_user: user.email,
        amount: totalPrice,
    }
    const submitHandler = async (e) =>{
        e.preventDefault();
        const token = localStorage.getItem('token');
        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },


            };
            if(method === 'zalopay')
            {
                const {data} = await axios.post(
                    'http://localhost:5000/create-payment',
                    reqData,
                    config
                )
                console.log(data.transaction);
                // window.location.href = data.transaction.order_url;
                // window.open(data.transaction.order_url, '_blank');
                window.open(data.transaction.order_url, 'ZaloPay Payment', 'width=800,height=600');
            }

            const {data} = await axios.post(
                'https://e-commerce-1-v807.onrender.com/api/v1/order/neworder',
                order,
                config
            )
            console.log(data);
            // dispatch(newOrder(order));
            dispatch(emptyCart());
            navigate("/orders");
        }
        catch(err){
            console.log(err)
        }
    }

    // const submitHandler = async (e) => {
    //     e.preventDefault();

    //     // paymentBtn.current.disabled = true;
    //     setPayDisable(true);

    //     try {
    //         const config = {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         };

    //         const { data } = await axios.post(
    //             '/api/v1/payment/process',
    //             paymentData,
    //             config,
    //         );

    //         let info = {
    //             action: "https://securegw-stage.cod.in/order/process",
    //             params: data.codParams
    //         }

    //         post(info)

    //         // if (!stripe || !elements) return;

    //         // const result = await stripe.confirmCardPayment(client_secret, {
    //         //     payment_method: {
    //         //         card: elements.getElement(CardNumberElement),
    //         //         billing_details: {
    //         //             name: user.name,
    //         //             email: user.email,
    //         //             address: {
    //         //                 line1: shippingInfo.address,
    //         //                 city: shippingInfo.city,
    //         //                 country: shippingInfo.country,
    //         //                 state: shippingInfo.state,
    //         //                 postal_code: shippingInfo.pincode,
    //         //             },
    //         //         },
    //         //     },
    //         // });

    //         // if (result.error) {
    //         //     paymentBtn.current.disabled = false;
    //         //     enqueueSnackbar(result.error.message, { variant: "error" });
    //         // } else {
    //         //     if (result.paymentIntent.status === "succeeded") {

    //         //         order.paymentInfo = {
    //         //             id: result.paymentIntent.id,
    //         //             status: result.paymentIntent.status,
    //         //         };

    //         //         dispatch(newOrder(order));
    //         //         dispatch(emptyCart());

    //         //         navigate("/order/success");
    //         //     } else {
    //         //         enqueueSnackbar("Processing Payment Failed!", { variant: "error" });
    //         //     }
    //         // }

    //     } catch (error) {
    //         // paymentBtn.current.disabled = false;
    //         setPayDisable(false);
    //         enqueueSnackbar(error, { variant: "error" });
    //     }
    // };

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            enqueueSnackbar(error, { variant: "error" });
        }

    }, [dispatch, error, enqueueSnackbar]);

    useEffect(() => {
        console.log(method);
    }, [method]);


    return (
        <>
            <MetaData title="Roced: Secure Payment | cod" />

            <main className="w-full mt-20">

                {/* <!-- row --> */}
                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

                    {/* <!-- cart column --> */}
                    <div className="flex-1">

                        <Stepper activeStep={3}>
                            <div className="w-full bg-white">

                                <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden">
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="payment-radio-group"
                                            defaultValue="cod"
                                            name="payment-radio-button"
                                        >
                                            <FormControlLabel
                                                onClick={() => setMethod('cod')}
                                                value="cod"
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4" >
                                                        <img draggable="false" className="h-10 w-10 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08FpvDoIXUDGdRJ2iFh0FOqegvJjOgoHKZT6wXXnLjA&s" alt="cod Logo" />
                                                        <span>COD</span>
                                                    </div>
                                                }
                                            />
                                            <FormControlLabel
                                                value="zalopay"
                                                onClick={() => setMethod('zalopay')}
                                                control={<Radio />}
                                                label={
                                                    <div className="flex items-center gap-4">
                                                        <img draggable="false" className="h-10 w-10 object-contain" src={zalopay} alt="zalopay Logo" />
                                                        <span>Zalo Pay</span>
                                                    </div>
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                    <input type="submit" value={`Pay ₫${totalPrice.toLocaleString()}`} disabled={payDisable ? true : false} className={`${payDisable ? "bg-primary-grey cursor-not-allowed" : "bg-primary-orange cursor-pointer"} w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`} />

                                </form>

                                {/* stripe form */}
                                {/* <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-8 my-4">
                                <div>
                                    <CardNumberElement />
                                </div>
                                <div>
                                    <CardExpiryElement />
                                </div>
                                <div>
                                    <CardCvcElement />
                                </div>
                                <input ref={paymentBtn} type="submit" value="Pay" className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none cursor-pointer" />
                            </form> */}
                                {/* stripe form */}

                            </div>
                        </Stepper>
                    </div>

                    <PriceSidebar cartItems={cartItems} />
                </div>
            </main>
        </>
    );
};

export default Payment;