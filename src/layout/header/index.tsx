import React, { useState } from "react";
import { Link } from "gatsby";
import Menu from "../menu";
import Logo from "../../components/logo"
import styles from "./index.module.styl";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = (e) => {
    setMenuOpen(!menuOpen);
    document.documentElement.style.overflow = menuOpen ? null : 'hidden';
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
        onClick={handleToggleMenu}
      />

      <Menu isOpen={menuOpen} />
    </header>
  );
}

export default Header
