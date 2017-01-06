import React from 'react';
// import ReviewsModal from './reviews_modal';
import { formatRating }
      from '../helper_functions/product_details_helper';

class ReviewsIndexItem extends React.Component {
  constructor(props) {
    // Object {review: Object}
    //   deleteReview: deleteReview(review)
    //   review: Object
    //       body: "creation test 5"
    //       created_at: 617226
    //       created_at_string: "7 days ago"
    //       id: 42
    //       product_id: 1
    //       rating: 5
    //       title: "Test 5"
    //       updated_at: 617226
    //       updated_at_string: "7 days ago"
    //       user: "Leonard"
    //       user_id: 5
    //   updateReview: updateReview(review)

    super(props);
  }

  render() {
    let rating = formatRating(this.props.review.rating);

    return (
      <div className="review-list-item">
        <div className="review-heading">
          <div className="review-stars">
            {rating.map(star => (star))}
          </div>
          <p className="review-username">
            {this.props.review.user}
          </p>
          <span className="review-creation-time dot">
            ·
          </span>
          <p className="review-creation-time">
            {this.props.review.updated_at_string}
          </p>
        </div>
        <div className="review-title">
          {this.props.review.title}
        </div>
        <div className="review-body">
          {this.props.review.body.split("\n").map((section, idx) => (
            <span key={idx}>
              {section}
              <br/>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewsIndexItem;
