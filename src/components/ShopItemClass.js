import React, { Component } from 'react';

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
      <div class="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div class="description">{this.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay" />
        </div>
        <div class="divider" />
        <div class="purchase-info">
          <div class="price">{this.currency}{this.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}
