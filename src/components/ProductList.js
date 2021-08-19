import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();

  if (filteredProducts < 1) {
    return (
      <h5 style={{ textTranform: "none" }}>
        Sorry, no product matched the criteria
      </h5>
    );
  }

  if (gridView) {
    return <GridView products={filteredProducts}></GridView>;
  }

  return <ListView products={filteredProducts}></ListView>;
};

export default ProductList;
