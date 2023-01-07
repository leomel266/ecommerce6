import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { getUserCart } from "../store/slices/cart.slice";
import getConfig from "../utils/getConfig";
import "./styles/cart.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const handleCheckout = () => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some References",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='cart-container'>
      <h2 className='cart__title'>Cart</h2>
      <div className='cart__product-container'>
        {cartProducts?.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <footer className='cart-footer'>
        <span className='cart__span'>Total:</span>
        <p className='cart__p'>
          {cartProducts
            ? cartProducts.reduce((acc, cv) => {
                return cv.price * cv.productsInCart.quantity + acc;
              }, 0)
            : "empty"}
        </p>
        <button className='footer__btn' onClick={handleCheckout}>
          Cheackout
        </button>
      </footer>
    </section>
  );
};

export default Cart;