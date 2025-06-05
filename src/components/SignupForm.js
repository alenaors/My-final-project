import { useState } from "react";
import { useTranslation } from "react-i18next";

const SignupForm = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwrix0wATu3cwNUwcUR8hCQNVqg_o2c7PxwLS97XcsYGBU33DmXm5WxtCGto6q20nHx/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      setSubmitted(true);
    } catch (err) {
      setError(t("form.error"));
    }
  };

  return submitted ? (
    <p>{t("form.thankYou")}</p>
  ) : (
    
    <form onSubmit={handleSubmit} className="signUpForm" >
      <p className="signUpFormText">{t("form.intro")}</p>
      <input
        type="text"
        name="name"
        placeholder={t("form.namePlaceholder")}
        value={form.name}
        onChange={handleChange}
        className="signUpFormInput"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t("form.emailPlaceholder")}
        value={form.email}
        onChange={handleChange}
        className="signUpFormInput"
        required
      />
      <button type="submit" className="singUpBtn">
      {t("form.submit")}
      </button>
      {error && <p>{error}</p>}
    </form>
    
  );
};

export default SignupForm;