import { useState, React, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct"
import { Style } from "@material-ui/icons";

const settings = ["Profile", "Logout"];

const style = {

  left: '150%',

};

function Navbar() {
  const navigate = useNavigate();
  const { admin, user, dispatch } = useContext(Context);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [nav, setnav] = useState(false);
  const handleLogOut = () => {
    dispatch({ type: "LogOutAdmin" });
    localStorage.removeItem("admin");
    navigate("/LoginAd");
    document.location.reload()
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </a>



      {admin ?
        <AddProduct sx={style} />
        :

        <ul>
          <li>
            <Link to={"/Contactus"}>Contact us </Link>
          </li>
          <li>
            <a>
              <Link to={"/Services"}>Services </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Products"}>Products </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Forum"}>Forum</Link>
            </a>
          </li>
        </ul>}

      <ul>
        {user || admin ? (
          <li>
            <Tooltip title="Open settings" sx={{ p: 0 }} margin="right">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handleLogOut}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </li>
        ) : (
          <li>

            <Link to="/login">
              <button>login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
