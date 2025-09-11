import React, { useState } from "react";
import * as styles from "../styles/Reviews.module.css";

const Reviews = ({ reviews, productName }) => {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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

  const handleStarClick = (rating) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };

  const handleStarHover = (rating) => {
    setHoverRating(rating);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.name && reviewForm.rating && reviewForm.comment) {
      // Backend-ready: Prepare review data for API submission
      const reviewData = {
        productName,
        author: reviewForm.name,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
        timestamp: new Date().toISOString()
      };
      
      // Backend-ready: This would be an API call to POST /api/reviews
      console.log('Backend API Call - Submit Review:', reviewData);
      
      // Simulate API success response
      setSubmitted(true);
      setReviewForm({ name: '', rating: 0, comment: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  const getRatingDisplay = (rating) => {
    return hoverRating > 0 ? hoverRating : rating;
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
        {submitted && (
          <div className={styles.successMessage}>
            Thank you! Your review has been submitted successfully.
          </div>
        )}
        <form className={styles.reviewForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="reviewer-name" className={styles.label}>Your Name</label>
            <input 
              type="text" 
              id="reviewer-name"
              name="name"
              className={styles.input} 
              placeholder="Enter your name"
              value={reviewForm.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <span className={styles.label}>Rating</span>
            <div className={styles.ratingInput} role="radiogroup" aria-labelledby="rating-label">
              <span id="rating-label" className={styles.srOnly}>Product rating</span>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={`${styles.starButton} ${star <= getRatingDisplay(reviewForm.rating) ? styles.active : ''}`}
                  aria-label={`${star} star${star !== 1 ? 's' : ''}`}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={handleStarLeave}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="review-comment" className={styles.label}>Your Review</label>
            <textarea 
              id="review-comment"
              name="comment"
              className={styles.textarea} 
              placeholder="Share your thoughts about this product..."
              rows="4"
              value={reviewForm.comment}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={!reviewForm.name || !reviewForm.rating || !reviewForm.comment}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;