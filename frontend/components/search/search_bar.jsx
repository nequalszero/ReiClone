import React from 'react';
import { withRouter, Link } from 'react-router';
import { defaultFieldTextClass,
         activeHeaderText
       } from '../helper_functions/misc_elements';

const defaultText = "Search for great gear!";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultText,
      placeHolder: true
    };

    this.setButtonClass = this.setButtonClass.bind(this);
    this.validEntry = this.validEntry.bind(this);

    this.submitSearch = this.submitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  validEntry() {
    return !this.state.placeHolder && this.state.value !== "";
  }

  submitSearch(e) {
    e.preventDefault();
    if (this.validEntry()) {
      const pathName = '/search'

      let url = this.props.router.createPath({
        pathname: pathName,
        query: { keywords: this.state.value }
      });

      let currentURL = this.props.router.location.pathname +
                       this.props.router.location.search;

      // Don't create new search if duplicate request
      if (currentURL !== url) {
        this.props.router.push(url);

        // If the url pathname is not '/search', onEnter hook in root.jsx
        // will dispatch the search
        if (this.props.router.location.pathname === "/search") {
          this.props.search({
            keywords: url.slice(pathName.length)
          });
        }

        // Blur child input of form to reset placeholder when the form is
        // submitted via the Enter key; ensures that onFocus is triggered
        // if the user immediately wants to conduct a new search.
        e.target.childNodes[0].blur();
        this.setState({ value: defaultText, placeHolder: true });
      }
    }
  }

  setButtonClass() {
    let baseClass = "search-button";
    return this.validEntry() ? `${baseClass} ${activeHeaderText}` : baseClass;
  }

  resetInput() {
    this.setState({ value: defaultText, placeHolder: true });
  }

  handleInputChange() {
    return (e) => {
      this.setState({ value: e.target.value, placeHolder: false });
    };
  }

  handleInputFocus() {
    return (e) => {
      if (this.state.placeHolder) {
        this.setState({value: "", placeHolder: true});
      }
    };
  }

  handleInputBlur() {
    return (e) => {
      if (this.state.value === "") {
        this.resetInput();
      }
    };
  }

  render() {
    return (
      <form className="header-search-bar" onSubmit={this.submitSearch}>
        <input className="search-bar-input"
               value={this.state.value}
               maxLength="70"
               onChange={ this.handleInputChange() }
               onFocus={ this.handleInputFocus() }
               onBlur={ this.handleInputBlur() }>
        </input>
        <button type="submit"
                className={this.setButtonClass()}>
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
