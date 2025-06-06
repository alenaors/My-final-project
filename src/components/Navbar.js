import { Link } from "react-router-dom";
import logo from "../photo/logo.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleLang = ()=> {
    i18n.changeLanguage(i18n.language==='en'?'ru':'en')
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <p className="logoName">Little Panda</p>
        
      </div>
   <div className="links-container">
      <div ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>{t("navbar.home")}</Link>
        <Link to="/preschool" onClick={() => setIsOpen(false)}>{t("navbar.preschool")}</Link>
        <Link to="/speech-therapy" onClick={() => setIsOpen(false)}>{t("navbar.speechTherapy")}</Link>
        <Link to="/dance" onClick={() => setIsOpen(false)}>{t("navbar.dance")}</Link>
        <Link to="/montessori" onClick={() => setIsOpen(false)}>{t("navbar.montessori")}</Link>
      </div>
      <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
      <button onClick={toggleLang} className="btnLang">
          {i18n.language === "en" ? "RU" : "EN"}
        </button>
    </div>
    </nav>
  );
};

export default Navbar;