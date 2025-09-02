import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import Reviews from "../components/Reviews";
import { getProductById } from "../data/products";
import * as styles from "../styles/ProductDetail.module.css";

const ProductDetailPage = ({ params }) => {
  // In a real app, you'd get the product ID from the URL
  // For this demo, we'll show the first product with reviews
  const product = getProductById(1); // Classic Denim Jacket with reviews
  
  if (!product) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <h1>Product Not Found</h1>
          <button onClick={() => navigate("/")} className={styles.backButton}>
            Back to Shop
          </button>
        </div>
      </Layout>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getAverageRating = () => {
    if (!product.reviews || product.reviews.length === 0) return 0;
    const total = product.reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / product.reviews.length).toFixed(1);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          ← Back to Shop
        </button>
        
        <div className={styles.productDetail}>
          <div className={styles.productImage}>
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <div className={styles.productRating}>
              <div className={styles.stars}>
                {renderStars(Math.round(parseFloat(getAverageRating())))}
              </div>
              <span className={styles.ratingText}>
                {getAverageRating()} ({product.reviews?.length || 0} reviews)
              </span>
            </div>
            
            <div className={styles.price}>${product.price}</div>
            
            <div className={styles.description}>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <div className={styles.category}>
              <strong>Category:</strong> {product.category}
            </div>
            
            <div className={styles.actions}>
              <button className={styles.addToCartButton}>
                Add to Cart - ${product.price}
              </button>
            </div>
          </div>
        </div>
        
        <Reviews reviews={product.reviews} productName={product.name} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

export const Head = ({ params }) => {
  const product = getProductById(1);
  return <title>{product?.name || 'Product'} - Guyshop</title>;
};