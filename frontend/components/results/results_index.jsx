import React from 'react';
import ResultsIndexItem from './results_index_item';
import { bottomDivider } from '../helper_functions/misc_elements';

class ResultsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearResultsFromState();
  }

  numMatches(matches) {
    let text = matches > 0 ? `(${matches} matches)`
                           : "Sorry, we couldn't find any matches.";
    return (
      <span className="num-matches">
        {text}
      </span>
    );

  }

  displayResults() {
    let matches = this.props.results.items.length;

    return(
      <div className="product-results-container-with-title">
        <div className="results-name-and-matches">
          <h2 className="results-name">{this.props.displayText}</h2>
          {this.numMatches(matches)}
        </div>
        { matches > 0 ? bottomDivider : null}
        <div className="product-results-container">
          {
            this.props.results.items.map((item) => (
              <ResultsIndexItem item={item}
                                key={item.id}/>
            ))
          }
        </div>
      </div>
    );
  }

  loadResults() {
    if (this.props.results.items) {
      return this.displayResults();
    } else {
      return (<p>Loading</p>);
    }
  }

  render() {
    return(
      <div>
        <div className="product-results-page">
          <div className="sidebar-container"></div>
          {this.loadResults()}
        </div>
      </div>
    );
  }
}

export default ResultsIndex;
