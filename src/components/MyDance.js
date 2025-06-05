import { useTranslation } from "react-i18next";

function MyDance({ anyDance }) {
  const { t } = useTranslation();

  return (
    <div className="classes">
      {anyDance.map((item) => {
        const { id, key, image } = item;
        return (
          <div key={id} className="dance-card">
            <div className="danceTitle">
              <h3>{t(`dance.classes.${key}.name`)}</h3>
            </div>
            <img src={image} alt={t(`dance.classes.${key}.name`)} width="500px" />
            <p className="danceDescr">{t(`dance.classes.${key}.description`)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MyDance;