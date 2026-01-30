import ProductItem from "./ProductItem";
import CardShimmer from "./CardShimmer";
import { useSelector } from "react-redux";
import { getQuery } from "store/searchSlice";
import { useGetAllProductsQuery, useGetShoesQuery } from "@/services/apiSlice";

const ProductContainer = ({
  type,
  limit = null,
  query,
  minPrice,
  maxPrice,
}) => {
  const {
    data: allData,
    isLoading: loadingAll,
    isError: errorAll,
  } = useGetAllProductsQuery();

  const {
    data: shoesData,
    isLoading: loadingShoes,
    isError: errorShoes,
  } = useGetShoesQuery();

  const isError = type === "all" ? errorAll : errorShoes;

  const products = type === "all" ? allData || [] : shoesData || [];

  const productsList = limit ? products?.slice(0, limit) : products;

  const loading = type === "all" ? loadingAll : loadingShoes;
  const headerQuery = useSelector(getQuery);

  const filteredProducts = productsList.filter((p) => {
    const categoryProducts =
      !query || query === "allcategory"
        ? true
        : p.category.includes(query.toLowerCase());
    const searchMatch = headerQuery
      ? p.title.toLowerCase().includes(headerQuery.toLowerCase())
      : true;
    const minPriceItem = minPrice ? p.price >= Number(minPrice) : true;
    const maxPriceItem = maxPrice ? p.price <= Number(maxPrice) : true;
    return categoryProducts && searchMatch && minPriceItem && maxPriceItem;
  });

  if (loading) {
    return (
      <section className="max-w-[1280px] mx-auto flex justify-center flex-wrap gap-6 pb-12">
        {[...Array(8)].map((_, i) => (
          <CardShimmer key={i} />
        ))}
      </section>
    );
  }

  return (
    <>
      {!isError ? (
        <section className="max-w-[1280px] px-6 mx-auto grid justify-items-center lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-10 pb-12">
          {filteredProducts.map((item) => {
            return (
              <ProductItem
                key={item.id}
                img={item.images[0]}
                title={item.title}
                price={item.price}
                desc={item.description}
                productId={item.id}
              />
            );
          })}
        </section>
      ) : (
        <p className="text-center text-red-600 dark:text-red-400 text-xl py-10">
          {"Something went wrong !"}
        </p>
      )}
    </>
  );
};

export default ProductContainer;
