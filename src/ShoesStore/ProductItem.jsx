import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, selectItem } = this.props;
    return (
      <div style={{marginTop: 20, marginBottom: 20} } className="card text-center">
        <img src={product.image} alt={product.name} />
        <div className="card-body">
          <div className="card-title fw-bolder fs-4">{product.name}</div>
          <div style={{marginBottom: 10}} className="card-text fw-bolder">${product.price}</div>
          <button
            type="button"
            className="btn btn-success fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => selectItem(product)}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
