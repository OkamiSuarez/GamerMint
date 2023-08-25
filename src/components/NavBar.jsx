import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import PersonalComputer from "./PersonalComputer";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <button className={styles.btnBrand}>
        <Link to={"/"}>
          <h1>GamerMint</h1>
        </Link>
      </button>
      <div className={styles.btnPc}>
        <PersonalComputer></PersonalComputer>
      </div>
      <button className={styles.btnCart}>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
      </button>
    </div>
  );
};

export default NavBar;
