import React, { useState } from "react";
import { Link } from "gatsby";
import Menu from "../menu";
import Logo from "../../components/logo"
import styles from "./index.module.styl";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = (state) => {
    setMenuOpen(state);
    document.documentElement.style.overflow = !state ? null : 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/" aria-label='Home Page'>
          <Logo />
        </Link>

        <button
          aria-label='Menu'
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => handleToggleMenu(!menuOpen)}
        />
      </div>

      <Menu isOpen={menuOpen} setOpen={handleToggleMenu} />
    </header>
  );
}

export default Header
