import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

const languageAliases = {
  js: "javascript",
  jsx: "jsx",
  ts: "typescript",
  tsx: "tsx"
};

export function resolveLanguage(language = "tsx") {
  const normalized = String(language).trim().toLowerCase();
  return languageAliases[normalized] || normalized || "tsx";
}

export function highlightCode(code, language = "tsx") {
  const resolvedLanguage = resolveLanguage(language);
  const grammar = Prism.languages[resolvedLanguage];

  if (!grammar) {
    return Prism.util.encode(code);
  }

  return Prism.highlight(code, grammar, resolvedLanguage);
}
