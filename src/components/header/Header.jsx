import { useEffect, useState } from "react";
import "./Header.css"; // Import CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AiOutlineLogout,
  AiOutlineMenuFold,
  AiOutlineClose,
} from "react-icons/ai";
import { logout } from "../../redux/actions/_authActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.account);
  const [openSmallMenu, setOpenSmallMenu] = useState(false);
  return (
    <div className="container">
      <header className={`${user ? "space" : ""}`}>
        <div className="logoContainer">
          <Link to="/">
            <h1 className="logoText">Shows App</h1>
          </Link>
        </div>
        {user && (
          <>
            <div className={`controls ${openSmallMenu ? "small-menu" : ""}`}>
              <nav className="menu">
                <ul>
                  {user.preferences && (
                    <>
                      <NavLink onClick={() => setOpenSmallMenu(false)} to="/">
                        Home
                      </NavLink>
                      <NavLink onClick={() => setOpenSmallMenu(false)} to="/tv">
                        Tv
                      </NavLink>
                      <NavLink
                        onClick={() => setOpenSmallMenu(false)}
                        to="/dashborad"
                      >
                        DashBoard
                      </NavLink>
                    </>
                  )}
                  <NavLink
                    onClick={() => setOpenSmallMenu(false)}
                    to="/setup-profile"
                  >
                    Setup profile
                  </NavLink>
                </ul>
              </nav>
              <div className="log-out">
                {/* <h3>hello {user.name.split(" ")[0]}</h3> */}
                <AiOutlineLogout
                  onClick={async () => {
                    setOpenSmallMenu(false);
                    await logout(dispatch, navigator);
                  }}
                  size={30}
                />
              </div>
            </div>
            <div className="menu-bar">
              <AiOutlineMenuFold
                onClick={() => setOpenSmallMenu(true)}
                size={30}
              />
              {openSmallMenu && (
                <AiOutlineClose
                  className="close-menu"
                  onClick={() => setOpenSmallMenu(false)}
                  size={30}
                />
              )}
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
