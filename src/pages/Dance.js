import React, { useState } from "react";
import { data } from "../components/data";
import MyDance from "../components/MyDance";
import Buttons from "../components/Buttons";
import background from "../photo/Background.jpg";
import SignupForm from "../components/SignupForm";
import { useTranslation } from "react-i18next";


function Dance() {
  const { t } = useTranslation();
  const [dance, setDance] = useState(data);

  const chosenDance = (searchTerm) => {
    const newDance = data.filter((element) => element.searchTerm === searchTerm);
    setDance(newDance);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "top",
        }}
    >
      <div className="titleWrapper">
        <h2 className="title">{t("dance.title")}</h2>
      </div>
      <Buttons filteredDance={chosenDance} resetDance={() => setDance(data)}/>
        <div className="danceText">
        <p>{t("dance.description")}</p>
    </div>
      <MyDance anyDance={dance} />
      <div className="formWrapper">
      <SignupForm />
      </div>
    </div>
  );
}

export default Dance;