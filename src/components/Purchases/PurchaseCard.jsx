import React from "react";
import "./styles/purchaseCard.css";

const PurchaseCard = ({ purchase }) => {
  const datePurchase = new Date(purchase.createdAt);
  return (
    <article className='purchase-container'>
      <h3 className='purchase__title'>{datePurchase.toLocaleDateString()}</h3>
      <div className='purchase__info'>
        <ul className='purchase__list'>
          {purchase.cart.products.map((prod) => (
            <li className='purchase__item' key={prod.id}>
              <h4 className='purchase__title-prod'>{prod.title}</h4>
              <span className='purchase__span-quantity'>
                {prod.productsInCart.quantity}
              </span>
              <span className='purchase__span-price'>${prod.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PurchaseCard;