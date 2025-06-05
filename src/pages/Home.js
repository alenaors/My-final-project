import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import banner1 from "../photo/banner1.png";
import banner2 from "../photo/banner2.png";
import banner3 from "../photo/banner3.png";
import background from "../photo/Background.jpg";
import "../App.css";

const Home = () => {
  const { t } = useTranslation();
  const slides = [banner1, banner2, banner3];
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
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "110vh",
      }}
    >
      

      <div className="sliderWrapper">
        <img
          src={slides[currentSlide]}
          alt="Slide"
          className="slideImage"
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
      <div className="title">
      <h1>{t("home.welcomeTitle")}</h1>
      </div>
      <div className="titleText">
      <p>{t("home.welcomeText")}</p>
</div>
    </div>
  );
};

export default Home; 