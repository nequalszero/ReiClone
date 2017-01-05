import React from 'react';
import Modal from 'react-modal';
import { activeStarClass, defaultFieldTextClass }
    from '../helper_functions/misc_elements';
import { blueButtonClass } from '../helper_functions/misc_elements';


const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '0px 0px',
    font                  : '16px sans-serif',
    borderRadius          : '0px',
    boxShadow             : '0px 10px 25px rgba(0, 0, 0, 0.5)'
  }
};

const starIcon = idx => <i key={idx}
                           className="fa fa-star fa-2x white"
                           aria-hidden="true">
                        </i>;

const ratingStars = [1, 2, 3, 4, 5].map(el => starIcon(el));
const ratingTexts = ["Poor", "Fair", "Average", "Good", "Excellent"];
const defaultRatingText = "Click to rate";
const defaultTitleText = "Example: Makes hiking even easier";
const defaultBodyText = "Example: I bought this a month ago and am so " +
                        "happy I did...";
const noStarsSelected = {1: false, 2: false, 3: false, 4: false, 5: false};
const defaults = { title: defaultTitleText, body: defaultBodyText };

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
    this.state.values = {title: defaultTitleText, body: defaultBodyText};
    this.state.placeHolders = {title: true, body: true};
    this.state.activeStars = noStarsSelected;

    if (props.review) {
      debugger
      Object.keys(defaults).forEach(key => {
        if (props.review[key]) {
          this.state.values[key] = props.review[key];
          this.state.placeHolders[key] = false;
        }
      });
      this.state.selectedStars = props.review.rating || 0;
      this.state.ratingText = ratingTexts[props.review.rating - 1] ||
                              defaultRatingText;
    } else {
      this.state.selectedStars = 0;
      this.state.ratingText = defaultRatingText;
    }


    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.renderRatingContainer = this.renderRatingContainer.bind(this);
    this.manageStarContainerClass = this.manageStarContainerClass.bind(this);
    this.handleStarMouseEnter = this.handleStarMouseEnter.bind(this);
    this.handleStarMouseLeave = this.handleStarMouseLeave.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);

    this.setInputClass = this.setInputClass.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);

    this.checkIfIncomplete = this.checkIfIncomplete.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  afterOpenModal() {

  }

  newStarState(idx) {
    let newActiveStars = {};

    for (let i = 1; i <= idx; i++) newActiveStars[i] = true;
    for (let i = idx + 1; i <= 5; i++) newActiveStars[i] = false;

    return newActiveStars;
  }

  handleStarMouseEnter(idx) {
    this.setState({activeStars: this.newStarState(idx),
                   ratingText: ratingTexts[idx-1]});
  }

  handleStarMouseLeave() {
    let newActiveStars = {};

    if (this.state.selectedStars === 0) {
      this.setState({activeStars: noStarsSelected,
                     ratingText: defaultRatingText});
    } else {
      this.setState({activeStars: this.newStarState(this.state.selectedStars),
                     ratingText: ratingTexts[this.state.selectedStars-1]});
    }
  }

  handleStarClick(idx) {
    this.setState({selectedStars: idx});
  }

  setInputClass(field) {
    const titleClass = "modal-review-title";
    const bodyClass = "modal-review-body";

    if (field === "title") {
      return (this.state.placeHolders["title"])
                ? `${titleClass} ${defaultFieldTextClass}`
                : titleClass;
    } else if (field === "body") {
      return (this.state.placeHolders["body"])
                ? `${bodyClass} ${defaultFieldTextClass}`
                : bodyClass;
    } else {
      throw `Error in reviewsModal#setInputClass - cannot recognize field ` +
            `${field}`;
    }
  }

  handleInputChange(field) {
    return (e) => {
      let newValues = Object.assign({}, this.state.values);
      newValues[field] = e.target.value;
      this.setState({values: newValues});
    };
  }

  handleInputFocus(field) {
    return (e) => {
      if (this.state.placeHolders[field]) {
        let newValues = Object.assign({}, this.state.values);
        newValues[field] = "";
        let newPlaceHolders = Object.assign({}, this.state.placeHolders);
        newPlaceHolders[field] = false;

        this.setState({values: newValues, placeHolders: newPlaceHolders});
      }
    };
  }

  handleInputBlur(field) {
    return (e) => {
      if (this.state.values[field] === "") {
        let newValues = Object.assign({}, this.state.values);
        newValues[field] = defaults[field];
        let newPlaceHolders = Object.assign({}, this.state.placeHolders);
        newPlaceHolders[field] = true;
        this.setState({values: newValues, placeHolders: newPlaceHolders});
      }
    };
  }

  checkIfIncomplete() {
    let invalid = false;
    Object.keys(defaults).forEach(key => {
      let stateValue = this.state.values[key];
      if (stateValue === defaults[key] || stateValue === "") invalid = true;
    });
    if (this.stateValue.selectedStars === 0) invalid = true;

    return invalid;
  }

  submitReview(e) {
    e.preventDefault();
    let review = {body: this.state.values.body,
                  title: this.state.values.title,
                  rating: this.state.selectedStars};
    this.props.submitAction(review);
    this.props.closeModal();
  }

  manageStarContainerClass(idx) {
    const baseClass = 'rating-star-container';
    return this.state.activeStars[idx] ? `${baseClass} ${activeStarClass}`
                                       : `${baseClass}`;
  }

  renderRatingContainer() {
    return (
      <div className="select-rating-stars-container">
        {ratingStars.map((star, idx) => (
          <div className={this.manageStarContainerClass(idx+1)}
               key={idx}
               onMouseEnter={() =>this.handleStarMouseEnter(idx+1)}
               onMouseLeave={this.handleStarMouseLeave}
               onClick={() => this.handleStarClick(idx+1)}>
            {star}
          </div>
        ))}
      </div>
    );
  }

  render() {
    let productName = `${this.props.item.brand} ${this.props.item.name}`;

    return (
        <Modal isOpen={this.props.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.props.closeModal}
               style={customStyles}
               contentLabel="Example Modal">
          <div className="review-modal-container">
            <div className="modal-sidepanel">
              <div className="modal-sidepanel-subcontainer">
                <div className="modal-image-container">
                  <img src={this.props.item.image}
                    alt={`${productName}`} />
                </div>
                <p className="modal-image-label">{`${productName}`}</p>
              </div>
            </div>
            <div className="modal-main-content-container">
              <h2 className="modal-review-heading">
                My review for the {productName}
              </h2>
              <div className="select-rating-container modal-review-element">
                <h3 className="review-label">
                  Product Rating*
                </h3>

                {this.renderRatingContainer()}

                <p className="select-rating-text">
                  {this.state.ratingText}
                </p>
              </div>
              <div className="modal-review-title-container modal-review-element">
                <h3 className="review-label">
                  Review title*
                </h3>
                <br></br>
                <input className={this.setInputClass("title")}
                  onChange={this.handleInputChange("title")}
                  onFocus={this.handleInputFocus("title")}
                  onBlur={this.handleInputBlur("title")}
                  maxLength="50"
                  value={this.state.values["title"]}>
                </input>
              </div>
              <div className="modal-review-body-container modal-review-element">
                <h3 className="review-label">
                  Review*
                </h3>
                <br></br>
                <textarea className={this.setInputClass("body")}
                  onChange={this.handleInputChange("body")}
                  onFocus={this.handleInputFocus("body")}
                  onBlur={this.handleInputBlur("body")}
                  maxLength="10000"
                  value={this.state.values["body"]}>
                </textarea>
              </div>
            </div>
            <button className={`review-modal-submit ${blueButtonClass}`}
              disabled={this.checkIfIncomplete}
              onClick={this.submitReview}>
              {this.props.submitButtonText}
            </button>
          </div>
        </Modal>
    );
  }
}

export default ReviewsModal;
