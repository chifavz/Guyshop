import React from "react";
import { navigate } from "gatsby";
import { getAverageRating } from "../data/products";
import * as styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  const averageRating = getAverageRating(product.reviews);
  const reviewCount = product.reviews ? product.reviews.length : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={styles.star}>★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.starHalf}>☆</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>☆</span>);
    }

    return stars;
  };

  const handleViewProduct = () => {
    navigate("/product");
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer} onClick={handleViewProduct}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName} onClick={handleViewProduct}>
          {product.name}
        </h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceAndRating}>
          <span className={styles.price}>${product.price}</span>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {renderStars(parseFloat(averageRating))}
            </div>
            <span className={styles.reviewCount}>
              {reviewCount > 0 ? `(${reviewCount} reviews)` : '(No reviews yet)'}
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.addToCartBtn}>Add to Cart</button>
          <button className={styles.viewProductBtn} onClick={handleViewProduct}>
            View Details & Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;