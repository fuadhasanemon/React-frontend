import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { products } from "../../faker/products";
import "./product.scss";

const Product = () => {
  return (
    <>
      <Header />
      <div className="shop-page py-5">
        <div className="container">
          <h2 className="mb-5">All Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img src={product.photo} alt="" />

                  <div className="card-body">
                    <div className="item_name">
                      <h3>{product.name}</h3>

                      {product.sale_price ? (
                        <div className="price">
                          <span className="sale-price">
                            {product.sale_price} BDT
                          </span>
                          <span className="regular-price">
                            {product.regular_price} BDT
                          </span>
                        </div>
                      ) : (
                        <div className="price">
                          <span className="regular-price">
                            {product.regular_price} BDT
                          </span>
                        </div>
                      )}

                      <Link
                        to={`/shop/${product.slug}`}
                        className="btn btn-primary"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
