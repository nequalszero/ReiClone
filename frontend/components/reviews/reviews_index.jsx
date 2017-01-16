import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import { formatRating } from '../helper_functions/rating_helper';

import { bottomDivider } from '../helper_functions/misc_elements';
import { blueButtonClass } from '../helper_functions/misc_elements';

import ReviewsModal from './reviews_modal';


class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false,
                   loadingAdditionalReviews: false};

    this.state.reviewItem = {image: this.props.item.primary_image,
                             brand: this.props.item.brand,
                             name: this.props.item.name,
                             product_id: this.props.item.id};

    this.state.buttonText = this.configureButtonText(
      props.userReview,
      props.currentUser
    );

    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.reviewModalElement = this.reviewModalElement.bind(this);

    this.additionalReviews = this.additionalReviews.bind(this);
    this.requestAdditionalReviews = this.requestAdditionalReviews.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reviews.length !== this.props.reviews.length &&
        this.state.loadingAdditionalReviews) {
      this.setState({loadingAdditionalReviews: false});
    }

    this.setState({reviewItem: {
      image: nextProps.item.primary_image,
      brand: nextProps.item.brand,
      name: nextProps.item.name,
      product_id: nextProps.item.id
    }});

    this.setState({buttonText: this.configureButtonText(
      nextProps.userReview,
      nextProps.currentUser
    )});
  }

  requestAdditionalReviews() {
    if (!this.state.loadingAdditionalReviews) {
      this.props.requestAdditionalReviews({
        productId: this.props.item.id,
        offset: this.props.reviews.length
      });
      this.setState({loadingAdditionalReviews: true});
    }
  }

  openReviewModal() {
    if (this.props.currentUser) this.setState({modalIsOpen: true});
    else window.scrollTo(0, 0);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  configureButtonText(userReview, currentUser) {
    if (!currentUser) return "Sign In to Leave a Review";
    return userReview ? "Update your review" : "Write a review";
  }

  renderReviews() {
    let rating = formatRating({
      rating: this.props.item.rating,
      numRatings: this.props.item.num_ratings,
      displayRatingText: true,
      className:"average-rating"
    });
    let numReviews = this.props.item.num_ratings;
    let numReviewsDisplaying = this.props.reviews.length;

    return (
      <div className="reviews-list">
        <h4 className="average-rating-label">
          Average Customer Ratings
        </h4>
        <div className="average-rating-container">
          {rating}
        </div>
        <p>
          1-{numReviewsDisplaying} of {numReviews} Reviews
        </p>
        {bottomDivider}
        {this.props.reviews.map((review, idx) => (
          <div className="review-container-row" key={idx}>
            <ReviewsIndexItem review={review}
                              deleteReview={this.props.deleteReview}
                              updateReview={this.props.updateReview}/>
            { idx === numReviewsDisplaying - 1 ? undefined : bottomDivider }
          </div>
        ))}
        {this.additionalReviews()}
      </div>
    );
  }

  additionalReviews() {
    if (this.props.item.num_ratings !== this.props.reviews.length &&
        !this.state.loadingAdditionalReviews) {
      return (
        <div className="load-reviews-container">
          <button className={`${blueButtonClass} load-reviews`}
            onClick={this.requestAdditionalReviews}>
            Load more reviews
          </button>
        </div>
      );
    }
  }

  renderNoReviews() {
    const noStars = formatRating({
      rating: 0,
      className: "no-reviews-stars"
    });

    return (
      <div className="no-reviews-container">
        {noStars}
        <p className="no-reviews-text"
           onClick={this.openReviewModal}>
          Be the first to review this product.
        </p>
        <ReviewsModal modalIsOpen={this.state.modalIsOpen}
                      closeModal={this.closeModal}
                      item={this.state.reviewItem}
                      submitAction={this.props.createReview}
                      submitButtonText="Submit Review"/>
      </div>
    );
  }

  reviewModalElement() {
    if (this.props.userReview) {
      return <ReviewsModal modalIsOpen={this.state.modalIsOpen}
                           closeModal={this.closeModal}
                           item={this.state.reviewItem}
                           submitAction={this.props.updateReview}
                           submitButtonText="Update Review"
                           review={this.props.userReview}/>;
    } else {
      return <ReviewsModal modalIsOpen={this.state.modalIsOpen}
                           closeModal={this.closeModal}
                           item={this.state.reviewItem}
                           submitAction={this.props.createReview}
                           submitButtonText="Submit Review"/>;
    }
  }

  render() {
    return (
      <div className="product-reviews-container">
        <div className="reviews-header-button-container">
          <h3 className="reviews-label">
            Reviews
          </h3>
          <button className={`${blueButtonClass} review-button`}
                  onClick={this.openReviewModal}>
            {this.state.buttonText}
          </button>
          {this.reviewModalElement()}
        </div>
        { this.props.reviews.length > 0 ? this.renderReviews()
                                        : this.renderNoReviews() }
      </div>
    );
  }
}

export default ReviewsIndex;
