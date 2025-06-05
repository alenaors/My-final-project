import { Link } from "react-router-dom";
import logo from "../photo/logo.png";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = ()=> {
    i18n.changeLanguage(i18n.language==='en'?'ru':'en')
  }

  return (
    <nav>
      <div className="logo-container">
      <img src={logo}  alt="Logo" className="logo"/>
      <p className="logoName">Little Panda</p>
      </div>
      <div>
      <Link to="/">{t('navbar.home')}</Link>
        <Link to="/preschool">{t('navbar.preschool')}</Link>
        <Link to="/speech-therapy">{t('navbar.speechTherapy')}</Link>
        <Link to="/dance">{t('navbar.dance')}</Link>
        <Link to="/montessori">{t('navbar.montessori')}</Link>
      <button onClick={toggleLang} className="btnLang">{i18n.language==='en'?'RU':'EN'}</button>
      </div>
    </nav>
  );
};

export default Navbar;