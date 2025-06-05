import { useState, useEffect } from "react";
import SignupForm from "../components/SignupForm";
import { useTranslation } from "react-i18next";
import background from "../photo/Background.jpg";
import photo1 from "../photo/draw4.png";
import photo2 from "../photo/play7.png";
import photo3 from "../photo/play10.png";
import photo4 from "../photo/play3.png";
import photo5 from "../photo/play11.png";
import photo6 from "../photo/read.png";
import photo7 from "../photo/read2.png";
import photo8 from "../photo/eat.png";

import photo9 from "../photo/play8.png";
const Preschool = () => {
  const { t } = useTranslation();
  const slides = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
      <h2 className="title">{t("preschool.title")}</h2>
      </div>
      <div className="textWrapper">
      <div className="sliderWrapperPre">
        <img
          src={slides[currentSlide]}
          alt="Slide"
          className="pageImage"
        />

        <button
          onClick={goToPrev}
          className="navButton navButtonLeft"
          aria-label="Previous slide"
        >
          ◀
        </button>

        <button
          onClick={goToNext}
          className="navButton navButtonRight"
          aria-label="Next slide"
        >
          ▶
        </button>
      </div>
        <div className="pageText">
        <p>{t("preschool.description")}</p>
        </div>
      </div>
      <div className="formWrapper">
      <SignupForm />
      </div>
    </div>
  );
};

export default Preschool;