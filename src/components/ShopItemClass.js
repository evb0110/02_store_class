import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.brand = props.item.brand;
    this.title = props.item.title;
    this.description = props.item.description;
    this.descriptionFull = props.item.descriptionFull;
    this.price = props.item.price;
    this.currency = props.item.currency;
  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div className="description">{this.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">
            {this.currency}
            {this.price.toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.exact({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};
