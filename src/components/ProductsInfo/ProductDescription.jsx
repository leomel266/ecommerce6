import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../store/slices/cart.slice";
import getConfig from "../../utils/GetConfig";
import "./styles/productDescription.css";

const ProductDescription = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };

  const handleCart = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/cart";
    const data = {
      id: product.id,
      quantity: counter,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => {
        if (err.response.status === 400) {
          const URLpatch = "https://e-commerce-api.academlo.tech/api/v1/cart";
          const prevQuantity = cart.filter((e) => e.id === product.id)[0]
            .productsInCart.quantity;
          const data = {
            id: product.id,
            newQuantity: prevQuantity + counter,
          };
          axios
            .patch(URLpatch, data, getConfig())
            .then((res) => {
              console.log(res.data);
              dispatch(getUserCart());
            })
            .catch((err) => console.log(err));
        }
      });
  };
  return (
    <article className='description-container'>
      <h2 className='description__title'>{product?.title}</h2>
      <div className='description__box'>
        <section className='description__product'>
          <span className='description__span'>Price</span>
          <h3 className='description__price'>{product?.price}</h3>
        </section>
        <section className='description__btns'>
          <h3 className='description__quantity'>Quantity</h3>
          <div className='btn-container'>
            <div className='btn' onClick={handleMinus}>
              -
            </div>
            <div className='counter'>{counter}</div>
            <div className='btn' onClick={handlePlus}>
              +
            </div>
          </div>
        </section>
      </div>
      <button className='description__add' onClick={handleCart}>
        Add to Cart <i className='fa-solid fa-cart-shopping'></i>
      </button>
      <p className='description__p'>{product?.description}</p>
    </article>
  );
};

export default ProductDescription;
