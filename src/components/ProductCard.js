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

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    // Use global cart function if available (client-side)
    if (typeof window !== 'undefined' && window.guyshopCart) {
      window.guyshopCart.addToCart(product);
    } else {
      // Backend-ready: This would be an API call to add to cart
      console.log('Backend API Call - Add to Cart:', {
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity: 1,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className={styles.productCard}>
      <button 
        className={styles.imageContainer} 
        onClick={handleViewProduct}
        aria-label={`View details for ${product.name}`}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.productImage}
        />
      </button>
      <div className={styles.productInfo}>
        <button 
          className={styles.productName} 
          onClick={handleViewProduct}
          aria-label={`View details for ${product.name}`}
        >
          {product.name}
        </button>
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
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
          <button className={styles.viewProductBtn} onClick={handleViewProduct}>
            View Details & Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;