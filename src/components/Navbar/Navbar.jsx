import { HomeIcon, ShopIcon } from "../icons";
import shopIcon from "../../assets/shopicon.svg";
import bagIcon from "../../assets/bagicon.svg";
import favoritesIcon from "../../assets/favoritesicon.svg";
import profileIcon from "../../assets/profileicon.svg";
import './Navbar.css'

function Navbar({ navigate }) {
  return (
    <nav className="navbar">
      <button className="btn navbar-btn" onClick={() => navigate("HOME")}>
        <HomeIcon active={false} />
        <p>Home</p>
      </button>
      <button className="btn navbar-btn" onClick={() => navigate("SHOP")}>
        <ShopIcon  active={false} />
        <p>Shop</p>
      </button>
      <button className="btn navbar-btn"  onClick={() => navigate("BAG")}>
        <img src={bagIcon} alt="bagicon" />
        <p>Bag</p>
      </button>
      <button className="btn navbar-btn"  onClick={() => navigate("FAVORITES")}>
        <img src={favoritesIcon} alt="favoritesicon" />
        <p>Favorites</p>
      </button>
      <button className="btn navbar-btn"  onClick={() => navigate("PROFILE")}>
        <img src={profileIcon} alt="profileicon" />
        <p>Profile</p>
      </button>
    </nav>
  )
}

export default Navbar