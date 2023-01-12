import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import CardProducts from "../components/Home/CardProducts";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import ToOrderProducts from "../components/Home/ToOrderProducts";
import "./styles/home.css";

const Home = () => {
  const [productsFilter, setProductsFilter] = useState();
  const [inputValue, setInputValue] = useState("");
  const [inputPrice, setInputPrice] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      setProductsFilter(products);
    }
  }, [products]);

  const handleOnChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const filter = products?.filter((prod) =>
      prod.title.toLowerCase().includes(inputValue)
    );
    setProductsFilter(filter);
    setInputValue(e.target.value);
  };

  const filterCallBack = (prod) =>
    +prod.price >= inputPrice.from && +prod.price <= inputPrice.to;
  return (
    <section className='home-container'>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
      <input
        className='home__input'
        value={inputValue}
        type='text'
        placeholder='What are you looking for?'
        onChange={handleOnChange}
      />
      <FilterPrice setInputPrice={setInputPrice} />
      <FilterCategory setInputValue={setInputValue} />
      <ToOrderProducts />
      <div className='products-container'>
        {productsFilter?.filter(filterCallBack).length !== 0 ? (
          productsFilter
            ?.filter(filterCallBack)
            .map((product) => (
              <CardProducts key={product.id} product={product} />
            ))
        ) : (
          <h1>There are no products to this filter</h1>
        )}
      </div>
    </section>
  );
};

export default Home;
