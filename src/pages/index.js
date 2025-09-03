import React from "react";
import Layout from "../components/Layout";
import NavigationLinks from "../components/NavigationLinks";
import ProductCard from "../components/ProductCard";
import { navigationLinks, documentationLink } from "../data/siteData";
import { products } from "../data/products";
import * as styles from "../styles/HomePage.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <h1 className={styles.heading}>
        Welcome to Guyshop
        <br />
        <span className={styles.headingAccent}>Men's Fashion & Accessories</span>
      </h1>
      <p className={styles.paragraph}>
        Discover our curated collection of premium men's fashion. From classic essentials to modern trends, find everything you need to elevate your style.
      </p>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <NavigationLinks links={navigationLinks} docLink={documentationLink} />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Guyshop - Men's Fashion & Accessories</title>;