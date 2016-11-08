import React from 'react';
import ResultsIndexItem from './results_index_item';


class ResultsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestCategoryItems(this.props.categoryId);
  }

  displayResults() {
    return(
      <div className="product-results-container">
        {
          this.props.product.items.map((item) => (
            <ResultsIndexItem item={item}/>
          ))
        }
      </div>
    );
  }

  loadResults() {
    console.log("this.props", this.props);
    if (this.props.product.items) {
      let results = this.displayResults();
      return results;
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
