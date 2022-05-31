import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <img style={{ width: "100%" }} src={product.image} alt="" />
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Name</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Alias</td>
                      <td>{product.alias}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Price</td>
                      <td>${product.price}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Short Description</td>
                      <td>{product.shortDescription}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary fw-bold"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
