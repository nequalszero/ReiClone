import React from 'react';
import { withRouter } from 'react-router';

const ResultsIndexItem = ({ item, router }) => {
  console.log("item: ", item);
  const handleClick = url => e => router.push(url);
  let itemName = `${item.brand} ${item.name}`;

  // onClick={handleClick(`/product/${item.id}`)}

  return (
    <div>
      <div key="item.id"
        className="results-index-item">
        <div className="result-image-container">
          <img className="result-image" src={item.result_image} alt={itemName}/>
        </div>
        <section className="text-and-rating">
          <section className="brand-and-name">
            <span className="brand-name">{item.brand}</span>
            <span className="item_name">{item.name}</span>
          </section>
          <span className="item_price">${item.price}</span>
          <span className="rating">Rating: {item.rating} ({item.num_ratings})</span>
        </section>
      </div>
    </div>
  );
};

export default withRouter(ResultsIndexItem);
