import SignupForm from "../components/SignupForm";
import background from "../photo/Background.jpg";
import photoMont from "../photo/montessori1.png";
import { useTranslation } from "react-i18next";

const Montessori = () => {
  const { t } = useTranslation();
  return (
    <div className="container"
      style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "110vh",
    }}>
      <div className="titleWrapper">
      <h2 className="title">{t("montessori.title")}</h2>
      </div>
      <div className="textWrapper">
        <img src={photoMont} className="pageImage"/>
        <div className="pageText">
        <p>{t("montessori.description")}</p>
        </div>
      </div>
      <div className="formWrapper">
      <SignupForm />
      </div>
    </div>
  );
};

export default Montessori;