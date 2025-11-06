import translations from "../translations.json";

export function translate(text, language) {
  if (language === "en") return text;
  return translations[text]?.[language] || text;
}
