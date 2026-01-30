import LatestCollections from "@/components/LatestCollections";
import ProductContainer from "@/components/ProductContainer";
import SortContainer from "@/components/SortContainer";
import { useState } from "react";

const Collection = () => {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <>
      <LatestCollections
        intro1="Discover"
        intro2="Filters"
        title="Refine your search to find the perfect match"
      />

      <SortContainer
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <LatestCollections
        intro1="Our"
        intro2="Collections"
        title="Carefully selected items designed to inspire your next choice"
      />
      <ProductContainer
        type="all"
        query={query}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </>
  );
};

export default Collection;
