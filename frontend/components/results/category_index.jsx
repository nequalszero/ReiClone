import React from 'react';
import { Link, withRouter } from 'react-router';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestCategories();
  }

  render(){
    const displayText = {
      "sleeping_bags": "Sleeping Bags",
      "tents": "Tents"
    };

    return (
      <ul className="categories-ul">
        {this.props.categories.map((category) => (
          <Link to={`/category/${category.id}`}
                key={category.id}>
              {displayText[category.name]}
          </Link>
          ))}
      </ul>
    );
  }
}

export default withRouter(CategoryIndex);
