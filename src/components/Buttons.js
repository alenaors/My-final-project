import { useTranslation } from "react-i18next";

function Buttons({ filteredDance, resetDance }) {
  const { t } = useTranslation();

  return (
    <div className="btnWrapper">
      <button className="danceBtn" onClick={() => filteredDance("beginner")}>
        {t("dance.filters.beginner")}
      </button>
      <button className="danceBtn" onClick={() => filteredDance("intermediate")}>
        {t("dance.filters.intermediate")}
      </button>
      <button className="danceBtn" onClick={() => filteredDance("advanced")}>
        {t("dance.filters.advanced")}
      </button>
      <button className="danceBtn" onClick={resetDance}>
        {t("dance.filters.all")}
      </button>
    </div>
  );
}

export default Buttons;