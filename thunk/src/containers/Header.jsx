import React, { useState, useEffect } from "react";
import Logo from "../img/amazon.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  // console.log(user)

  const logout = () => {
    localStorage.clear();

    history.push("/registration");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("userProfile")));
  }, [location]);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={Logo} width="120px" style={{ margin: "20px" }} />
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap", paddingRight: "20px" }}>
        {user && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              <Avatar></Avatar> &nbsp;&nbsp;
              {user?.name}
            </span>
            &nbsp;&nbsp;
          </div>
        )}
      </div>
      <div className="links">
        <Link to={"/myCart/:productId"} style={{ width: "40px" }}>
          <ShoppingCartIcon />
        </Link>
        &nbsp;&nbsp;
        {user ? (
          <Link to={"register"} onClick={logout}>
            <LogoutIcon />
          </Link>
        ) : (
          <Link to={"/register"}>
            <LoginIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
