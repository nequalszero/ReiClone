import React from 'react';
import ResultsIndexItem from './results_index_item';

class ResultsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearResultsFromState();
  }

  displayResults() {
    return(
      <div className="product-results-container-with-title">
        <h2 className="category-name">{this.props.displayText}</h2>
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
          <div className="sidebar-container">Sidebar filter goes here</div>
          {this.loadResults()}
        </div>
      </div>
    );
  }
}

export default ResultsIndex;
