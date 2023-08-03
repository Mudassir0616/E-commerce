import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/ProductAction";
import { Link } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AddToCart = () => {
  const cart = useSelector((state) => state?.allProducts?.basket);
  const basket = useSelector((state) => state?.allProducts?.basket);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [basketItems, setbasketItems] = useState([basket]);
  const user = JSON.parse(localStorage.getItem("userProfile"));

  // console.log("Basket Increment",basketItems)

  const fetchCartItem = async () => {
    if (productId !== ":productId") {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const cartData = await response.json();
      dispatch(addToCart(cartData));
      setDel([cartData]);
      setbasketItems([cartData]);
    }
  };

  const handleDelete = (index) => {
    cart.splice(index, 1);
    setDel([...cart]);
    setbasketItems([...cart]);
  };

  useEffect(() => {
    fetchCartItem();
  }, []);

  const [del, setDel] = useState([cart]);

  console.log("Cart Items ", cart);

  const renderCartItems = cart?.map((item, index) => (
    <div className="cart-items" key={item?.id}>
      <div className="item-images">
        <img src={item?.thumbnail} style={{ width: "170px" }} />
      </div>

      <div className="item-details">
        <h2>
          {item?.title} <h5 style={{ color: "darkblue" }}>{item.brand}</h5>
        </h2>
        <p>{item.description}</p>
        <h4>
          Rating -{" "}
          <span style={{ color: "#cd9042" }}>{item.rating} &#9733;</span>
        </h4>

        <div style={{ fontSize: "31px", fontWeight: "600", margin: "20px 0" }}>
          ${Math.round(item?.price - item?.price / item?.discountPercentage)}
          <span
            style={{
              color: "gray",
              textDecoration: "line-through",
              fontSize: "16px",
              fontWeight: "400",
              opacity: "0.9",
              paddingLeft: "7px",
            }}
          >
            ${item?.price}
          </span>
          &nbsp;
          <span
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
              opacity: "0.9",
            }}
          >
            ({item?.discountPercentage}% off )
          </span>
          <div
            style={{
              color: "gray",
              fontSize: "15px",
              fontWeight: "400",
              paddingTop: "7px",
            }}
          >
            <span style={{ color: "#cd9042", fontWeight: "700" }}>FREE</span>{" "}
            Delivery by Amazon
          </div>
        </div>

        <button className="item-btn" onClick={() => handleDelete(index)}>
          Remove
        </button>
      </div>
    </div>
  ));

  const total = cart?.map((product) =>
    Math.round(product?.price - product?.price / product?.discountPercentage)
  );
  const sum = total.reduce((allProducts, price) => allProducts + price, 0);

  return (
    <div className="render-cart">
      {user ? (
        <>
          <div className="cart">
            <Link to={"/"} className="home-link">
              <ArrowCircleLeftIcon sx={{ fontSize: "55px" }} />
            </Link>
            <br />
            <br />
            {renderCartItems?.length == 0 ? (
              <h2 className="no-item">
                There are 0 Items in the{" "}
                <ShoppingCartCheckoutIcon sx={{ fontSize: "30px" }} />
              </h2>
            ) : (
              ""
            )}

            {renderCartItems}
          </div>
          <div className="pricing">
            <h4>
              Your Sub Total Item <ShoppingCartIcon />
              {cart.length} : <br />
              <br />
              <span style={{ color: "#cd9042", fontSize: "19px" }}>
                {sum}$
              </span>{" "}
            </h4>
            <br />

            <Link to={"/checkout"}>
              <button title="Shop Again !!" className="chck-btn">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <span style={{ color: "red", fontSize: "20px" }}>
          Please Sign Up or Login to add items
        </span>
      )}
    </div>
  );
};

export default AddToCart;
