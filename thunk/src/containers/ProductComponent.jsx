import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuItem, Pagination, Select } from "@mui/material";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const [productSearched, setProductSearched] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);

  // const productsPerpage = 8;

  // const indexOflastProduct = currentPage * productsPerpage;
  // const indexOfFirstProduct = indexOflastProduct - productsPerpage;
  // const currentProducts = products?.slice(indexOfFirstProduct, indexOflastProduct)
  const [newsCategory, setNewsCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState([]);

  // const paginate =(e, value)=>{
  //   setCurrentPage(value)
  // }

  useEffect(() => {
    const filteredProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(searchProducts.toLowerCase())
    );
    setProductSearched(filteredProducts);
  }, [searchProducts]);
  useEffect(() => {
    if (newsCategory === "all") {
      setSelectedItem(products);
    } else {
      const filterItems = products?.filter((item) =>
        item.category.toLowerCase().includes(newsCategory)
      );
      setSelectedItem(filterItems);
    }
  }, [newsCategory]);

  // console.log('fffffffffffffff',products)
  // console.log(productSearched)
  // console.log(newsCategory)
  // console.log('selectedd',selectedItem)

  var categoryItems = [...new Set(products?.map((cat) => cat?.category))];
  const all = categoryItems.concat("all");

  const renderItems =
    productSearched?.length > 0
      ? productSearched?.map((product) => (
          <div>
            <Link to={`product/${product.id}`}>
              <div
                className="card"
                key={product?.id}
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    textAlign: "left",
                    width: "100%",
                    marginBottom: "15px",
                  }}
                >
                  <h3>{product?.brand}</h3>
                </span>
                <div className="image">
                  <img src={product?.thumbnail} />
                </div>

                <div className="content">
                  <div
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "17px",
                      opacity: "0.9",
                    }}
                  >
                    {product?.title}
                    <span
                      style={{
                        fontSize: "13px",
                        paddingLeft: "7px",
                        fontWeight: "400",
                      }}
                    >
                      ({product?.category})
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      margin: "20px 0",
                    }}
                  >
                    $
                    {Math.round(
                      product?.price -
                        product?.price / product?.discountPercentage
                    )}
                    <span
                      style={{
                        color: "gray",
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: "500",
                        paddingLeft: "7px",
                      }}
                    >
                      ${product?.price}
                    </span>
                    &nbsp;
                    <span
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "green",
                      }}
                    >
                      ({product?.discountPercentage}% off )
                    </span>
                    <div
                      style={{
                        padding: "7px 0",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "500",
                      }}
                    >
                      <span style={{ color: "#cd9042" }}>Get 10% off </span> on
                      Diwali Dhamaka
                    </div>
                    <div
                      style={{
                        color: "gray",
                        fontSize: "15px",
                        fontWeight: "400",
                        paddingTop: "7px",
                      }}
                    >
                      <span style={{ color: "#cd9042", fontWeight: "700" }}>
                        FREE
                      </span>{" "}
                      Delivery by Amazon
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      : products?.map((product) => (
          <div>
            <Link to={`product/${product.id}`}>
              <div className="card" key={product?.id}>
                <div className="image">
                  <h3>{product?.brand}</h3>
                  <img
                    src={product?.thumbnail}
                    style={{ width: "250px", borderRadius: "4px" }}
                  />
                </div>

                <div className="content">
                  <div
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "17px",
                      opacity: "0.9",
                    }}
                  >
                    {product?.title}
                    <span
                      style={{
                        fontSize: "13px",
                        paddingLeft: "7px",
                        fontWeight: "400",
                      }}
                    >
                      ({product?.category})
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      margin: "20px 0",
                    }}
                  >
                    $
                    {Math.round(
                      product?.price -
                        product?.price / product?.discountPercentage
                    )}
                    <span
                      style={{
                        color: "gray",
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: "500",
                        paddingLeft: "7px",
                      }}
                    >
                      ${product?.price}
                    </span>
                    &nbsp;
                    <span
                      style={{
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "green",
                      }}
                    >
                      ({product?.discountPercentage}% off )
                    </span>
                    <div
                      style={{
                        padding: "7px 0",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "500",
                      }}
                    >
                      <span style={{ color: "#cd9042" }}>Get 10% off </span> on
                      Diwali Dhamaka
                    </div>
                    <div
                      style={{
                        color: "gray",
                        fontSize: "15px",
                        fontWeight: "400",
                        paddingTop: "7px",
                      }}
                    >
                      <span style={{ color: "#cd9042", fontWeight: "700" }}>
                        FREE
                      </span>{" "}
                      Delivery by Amazon
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ));

  const renderCategories = selectedItem?.map((product) => (
    <div>
      <Link to={`product/${product.id}`}>
        <div className="card" key={product?.id}>
          <div className="image">
            <h3>{product?.brand}</h3>
            <img
              src={product?.thumbnail}
              style={{ width: "250px", borderRadius: "4px" }}
            />
          </div>

          <div className="content">
            <div
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: "17px",
                opacity: "0.9",
              }}
            >
              {product?.title}
              <span
                style={{
                  fontSize: "13px",
                  paddingLeft: "7px",
                  fontWeight: "400",
                }}
              >
                ({product?.category})
              </span>
            </div>

            <div
              style={{ fontSize: "25px", fontWeight: "600", margin: "20px 0" }}
            >
              $
              {Math.round(
                product?.price - product?.price / product?.discountPercentage
              )}
              <span
                style={{
                  color: "gray",
                  textDecoration: "line-through",
                  fontSize: "14px",
                  fontWeight: "500",
                  paddingLeft: "7px",
                }}
              >
                ${product?.price}
              </span>
              &nbsp;
              <span
                style={{
                  color: "black",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "green",
                }}
              >
                ({product?.discountPercentage}% off )
              </span>
              <div
                style={{
                  padding: "7px 0",
                  fontSize: "17px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                <span style={{ color: "#cd9042" }}>Get 10% off </span> on Diwali
                Dhamaka
              </div>
              <div
                style={{
                  color: "gray",
                  fontSize: "15px",
                  fontWeight: "400",
                  paddingTop: "7px",
                }}
              >
                <span style={{ color: "#cd9042", fontWeight: "700" }}>
                  FREE
                </span>{" "}
                Delivery by Amazon
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="amazon-logo">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home-img"
        />
      </div>

      {/* <div className="srch-products">
        <input
          type="text"
          className="srch-product-details"
          placeholder="Search..."
          onChange={(e) => setSearchProducts(e.target.value)}
        />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10px",
          alignItems: "left",
          padding: "0 4rem",
        }}
      >
        <h3>Select Categories</h3>
        <Select
          className="select-news"
          value={newsCategory}
          style={{ height: "30px" }}
          onChange={(e) => setNewsCategory(e.target.value)}
        >
          {/* <Select.Option value="CryptoCurrency">Crypto Currencies</Select.Option> */}
          {all?.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="render-products">
        {newsCategory === "all" ? renderItems && renderItems : renderCategories}
      </div>

      {/* <div style={{margin:'30px 0', display:'flex', justifyContent:'center'}}>
              <Pagination
                count={Math.ceil(products?.length / productsPerpage)} 
                size='large'
                page={currentPage}
                onChange={paginate}
              />
            </div> */}
    </div>
  );
};

export default ProductComponent;
