import React from "react";
import * as styles from "../styles/Reviews.module.css";

const Reviews = ({ reviews, productName }) => {
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
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsHeader}>
        <h3 className={styles.reviewsTitle}>Customer Reviews</h3>
        {reviews && reviews.length > 0 && (
          <div className={styles.reviewsSummary}>
            <div className={styles.averageRating}>
              <span className={styles.ratingNumber}>{getAverageRating()}</span>
              <div className={styles.stars}>
                {renderStars(Math.round(parseFloat(getAverageRating())))}
              </div>
              <span className={styles.reviewCount}>({reviews.length} review{reviews.length !== 1 ? 's' : ''})</span>
            </div>
          </div>
        )}
      </div>

      {!reviews || reviews.length === 0 ? (
        <div className={styles.noReviews}>
          <p>No reviews yet. Be the first to review {productName}!</p>
        </div>
      ) : (
        <div className={styles.reviewsList}>
          {reviews.map(review => (
            <div key={review.id} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAuthor}>
                  <strong>{review.author}</strong>
                </div>
                <div className={styles.reviewRating}>
                  {renderStars(review.rating)}
                </div>
                <div className={styles.reviewDate}>
                  {formatDate(review.date)}
                </div>
              </div>
              <div className={styles.reviewComment}>
                {review.comment}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.addReviewSection}>
        <h4 className={styles.addReviewTitle}>Write a Review</h4>
        <form className={styles.reviewForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name</label>
            <input type="text" className={styles.input} placeholder="Enter your name" />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Rating</label>
            <div className={styles.ratingInput}>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={styles.starButton}
                  aria-label={`${star} star${star !== 1 ? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Your Review</label>
            <textarea 
              className={styles.textarea} 
              placeholder="Share your thoughts about this product..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;