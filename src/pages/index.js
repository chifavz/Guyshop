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
      <div className={styles.page}>
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

        <div className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={styles.paragraph}>
            Guyshop is your premier destination for men's fashion and accessories. We curate high-quality, 
            stylish pieces that help modern men express their personal style with confidence. From timeless 
            classics to contemporary trends, every item in our collection is selected for its exceptional 
            quality and style.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productsGrid}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Guyshop - Men's Fashion & Accessories</title>;