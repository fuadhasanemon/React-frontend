import React from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import { products } from "../../faker/products";
import "./product-details.scss";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((data) => data.slug === slug);

  return (
    <>
      <Header />

      <div className="product-details-page py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img className="w-100" src={product.photo} alt="" />
            </div>
            <div className="col-md-7">
              <div className="item_content">
                <h3>{product.name}</h3>
                <hr />
                <div className="price">
                  {product.sale_price ? (
                    <p>
                      <span className="sale-price">
                        {product.sale_price} BDT
                      </span>
                      <span className="regular-price">
                        {product.regular_price} BDT
                      </span>
                    </p>
                  ) : (
                    <span className="regular-price">
                      {product.regular_price} BDT
                    </span>
                  )}
                </div>
                <hr />
                <p>{product.desc}</p>

                <a className="btn btn-warning" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
