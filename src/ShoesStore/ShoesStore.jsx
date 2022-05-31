import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import data from "./data.json";

export default class ShoesStore extends Component {
  state = {
    selectedItem: {},
  };

  handleSelectedItem = (product) => {
    this.setState({ selectedItem: product });
  };
  render() {
    return (
      <div className="container">
        <h1>Shoes Store</h1>
        <ProductList products={data} selectItem={this.handleSelectedItem} />
        <ProductDetail product={this.state.selectedItem} />
      </div>
    );
  }
}
