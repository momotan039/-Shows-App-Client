import { useEffect } from "react";
import "./Header.css"; // Import CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const { user } = useSelector((state) => state.account);
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
          <div className="controls">
            <nav className="menu">
              <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/tv">Tv</NavLink>
                <NavLink to="/dashborad">DashBoard</NavLink>
                <NavLink to="/setup-profile">Setup-profile</NavLink>
              </ul>
            </nav>
            <div className="log-out">
              <h3>hello {user.name.split(" ")[0]}</h3>
              <AiOutlineLogout onClick={async () => await logout(dispatch,navigator)} size={30} />
            </div>
          </div>
        </>
      )}
    </header>
    </div>
  );
};

export default Header;
