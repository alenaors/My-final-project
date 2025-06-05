import SignupForm from "../components/SignupForm";
import background from "../photo/Background.jpg";
import photoSpeech from "../photo/speechtherapy.png";
import { useTranslation } from "react-i18next";

const SpeechTherapy = () => {
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
      <h2 className="title">{t("speech.title")}</h2>
      </div>
      <div className="textWrapper">
        <img src={photoSpeech} className="pageImage"/>
        <div className="pageText">
        <p>{t("speech.description")}</p>
        </div>
      </div>
      <div className="formWrapper">
      <SignupForm />
      </div>
    </div>
  );
};

export default SpeechTherapy;