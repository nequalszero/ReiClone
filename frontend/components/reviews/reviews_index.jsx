import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import { formatRating }
      from '../helper_functions/product_details_helper';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: props.reviews,
                   errors: props.errors,
                   userReview: props.userReview,
                   item: props.item };
  }

  shouldComponentUpdate(nextProps) {
    // console.log("ShoppingCartDisplay shouldComponentUpdate");
    if (nextProps.reviews !== this.state.reviews) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate(nextProps) {
    // console.log("ShoppingCartDisplay componentWillUpdate");
    this.setState( {reviews: nextProps.reviews,
                    errors: nextProps.errors,
                    userReview: nextProps.userReview,
                    item: nextProps.item } );
  }

  renderReviews() {
    let rating = formatRating(this.state.item.rating);
    let numReviews = this.state.item.num_ratings;
    let numReviewsDisplaying = this.state.reviews.length;

    return (
      <div className="reviews-list">
        <h4 className="average-rating-label">
          Average Customer Ratings
        </h4>
        <div className="average-rating">
          {this.state.item.rating} {rating.map((star) => star)}
        </div>
        <p>
          Displaying 1-{numReviewsDisplaying} of {numReviews} Reviews
        </p>
        {this.state.reviews.map((review, idx) => (
          <ReviewsIndexItem review={review}
                            createReview={this.props.createReview}
                            deleteReview={this.props.deleteReview}
                            updateReview={this.props.updateReview}
                            key={idx}/>
        ))}
      </div>
    );
  }

  renderNoReviews() {
    const noStars = formatRating(0);

    return (
      <div className="no-reviews-container">
        {noStars.map((emptyStar) => emptyStar)}
        <p className="no-reviews-text">Be the first to review this product.</p>
      </div>
    );
  }

  render() {
    return (
      <div className="product-reviews-container">
        <h3 className="reviews-label">Reviews</h3>
        { this.state.reviews.length > 0 ? this.renderReviews()
                                                : this.renderNoReviews() }
      </div>
    );
  }
}

export default ReviewsIndex;
