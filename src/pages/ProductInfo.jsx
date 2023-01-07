import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardProducts from "../components/Home/CardProducts";
import ProductDescription from "../components/ProductsInfo/ProductDescription";
import SliderImg from "../components/ProductsInfo/SliderImg";
import "./styles/productInfo.css";

const ProductInfo = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState();

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.data.product))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (allProducts && product) {
      const pivot = allProducts.filter(
        (prod) => prod.category.name === product.category
      );
      setSimilarProducts(pivot);
    }
  }, [allProducts, product]);
  return (
    <div className='product__info-container'>
      <SliderImg listImgs={product?.productImgs} />
      <ProductDescription product={product} />
      <section className='similar-container'>
        <h2 className='similar__title'>Discover Similar Items</h2>
        <div className='similar-products-container'>
          {similarProducts?.map((simProd) => {
            if (simProd.title !== product.title) {
              return <CardProducts key={simProd.id} product={simProd} />;
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
