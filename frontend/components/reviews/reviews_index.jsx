import React from 'react';
import ReviewsIndexItem from './reviews_index_item';
import { formatRating }
      from '../helper_functions/product_details_helper';
import { bottomDivider } from '../helper_functions/misc_elements';
import { blueButtonClass } from '../helper_functions/misc_elements';

import ReviewsModal from './reviews_modal';


class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: props.reviews,
                   errors: props.errors,
                   userReview: props.userReview,
                   item: props.item,
                   modalIsOpen: false,
                   loadingAdditionalReviews: false};

    this.state.reviewItem = {image: this.props.item.primary_image,
                             brand: this.props.item.brand,
                             name: this.props.item.name,
                             product_id: this.props.item.id};

    this.state.buttonText = this.configureButtonText(props.userReview);

    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.reviewModalElement = this.reviewModalElement.bind(this);

    this.additionalReviews = this.additionalReviews.bind(this);
    this.requestAdditionalReviews = this.requestAdditionalReviews.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reviews.length !== this.state.reviews.length &&
        this.state.loadingAdditionalReviews) {
      this.setState({loadingAdditionalReviews: false});
    }
    this.setState({reviews: nextProps.reviews,
                   errors: nextProps.errors,
                   userReview: nextProps.userReview,
                   item: nextProps.item});
    this.setState({reviewItem: {
      image: nextProps.item.primary_image,
      brand: nextProps.item.brand,
      name: nextProps.item.name,
      product_id: nextProps.item.id
    }});

    this.setState({buttonText: this.configureButtonText(nextProps.userReview)});
  }

  requestAdditionalReviews() {
    if (!this.state.loadingAdditionalReviews) {
      this.props.requestAdditionalReviews({
        productId: this.state.item.id,
        offset: this.state.reviews.length
      });
      this.setState({loadingAdditionalReviews: true});
    }
  }

  openReviewModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  configureButtonText(userReview) {
    return userReview ? "Update your review" : "Write a review";
  }

  renderReviews() {
    let rating = formatRating({
      rating: this.state.item.rating,
      numRatings: this.state.item.num_ratings,
      displayRatingText: true,
      className:"average-rating"
    });
    let numReviews = this.state.item.num_ratings;
    let numReviewsDisplaying = this.state.reviews.length;

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
        {this.state.reviews.map((review, idx) => (
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
    if (this.state.item.num_ratings !== this.state.reviews.length &&
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
    if (this.state.userReview) {
      return <ReviewsModal modalIsOpen={this.state.modalIsOpen}
                           closeModal={this.closeModal}
                           item={this.state.reviewItem}
                           submitAction={this.props.updateReview}
                           submitButtonText="Update Review"
                           review={this.state.userReview}/>;
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
        { this.state.reviews.length > 0 ? this.renderReviews()
                                        : this.renderNoReviews() }
      </div>
    );
  }
}

export default ReviewsIndex;
