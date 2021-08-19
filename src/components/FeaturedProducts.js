import React from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { productsLoading, featuredProducts, productsError } =
    useProductsContext();

  if (productsLoading) {
    return <Loading />;
  }

  if (productsError) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.slice(0, 3).map((item) => {
          return <Product key={item.id} {...item}></Product>;
        })}
      </div>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
