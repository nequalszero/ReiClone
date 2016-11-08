import React from 'react';
import { withRouter } from 'react-router';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestCategories();
  }

  handleCategoryClick(url) {
    return (e) => {
      this.props.router.push(url);
    };
  }

  render(){
    const displayText = {
      "sleeping_bags": "Sleeping Bags",
      "tents": "Tents"
    };

    return (
      <ul className="categories-ul">
        {this.props.categories.map((category) => (
          <li key={category.id}
              onClick={this.handleCategoryClick(`category/${category.id}`)}
              >{displayText[category.name]}</li>
          ))}
      </ul>
    );
  }
}

export default withRouter(CategoryIndex);
