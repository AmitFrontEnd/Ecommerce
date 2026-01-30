import LatestCollections from "@/components/LatestCollections";
import NewsletterSignup from "@/components/NewsletterSignup";
import ProductContainer from "@/components/ProductContainer";
import ServiceHighlights from "@/components/ServiceHighlights";
import Sliderbanner from "@/components/Sliderbanner";
import React from "react";
const Home = () => {
  return (
    <>
      <Sliderbanner />
      <LatestCollections
        intro1="New"
        intro2="Arrivals"
        title="Discover the newest styles and products curated for you."
      />
      <ProductContainer type="all" limit={12} />
      <LatestCollections
        intro1="For"
        intro2="Shoe Lovers"
        title="Step into the latest trends with our newest shoe collections."
      />
      <ProductContainer type="shoes" />
      <ServiceHighlights />
      <NewsletterSignup />
    </>
  );
};

export default Home;
