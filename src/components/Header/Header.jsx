import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.jpg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const userName = "Teagan Bell";

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
      <Link to="/profile" className="header__nav-link">
        <div className="header__user-container">
          <p className="header__username">{userName}</p>
          <img src={avatar} alt="User avatar" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
