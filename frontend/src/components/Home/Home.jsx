import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';
import React from "react";

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Roced" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt sm:mt-2">
        <Banner />
        <DealSlider title={"Khuyến mãi dành cho bạn"} />
        {!loading && <ProductSlider title={"Đồ bạn thích ở đây"} tagline={"Rất nhiều ưu đãi tại đây"} />}
        {/* <DealSlider title={"Top Brands, Best Price"} /> */}
        {/* {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
        <DealSlider title={"Top Offers On"} />
        {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />} */}
      </main>
    </>
  );
};

export default Home;
