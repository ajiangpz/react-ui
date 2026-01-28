import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { ThemeGenerator } from "../../theme-generator/src/index";
import siteConfig from "../site.config.mjs";

// 生成路由
function getRoute(docs, lang, routes = []) {
  const isEn = lang === "en_US";
  docs.forEach((doc) => {
    if (doc.children) {
      doc.children.forEach((child) => {
        routes.push({
          path: child.path,
          component: isEn && child.componentEn ? child.componentEn : child.component,
          title: isEn && child.titleEn ? child.titleEn : child.title
        });
      });
    }
  });
  return routes;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("site-lang") || "zh_CN");
  const docRoutes = useMemo(() => getRoute(siteConfig.docs, lang, []), [lang]);

  useEffect(() => {
    const langMap = {
      zh_CN: "zh-CN",
      zh_TW: "zh-TW",
      en_US: "en",
      ja_JP: "ja",
      ko_KR: "ko",
      ru_RU: "ru",
      it_IT: "it",
      ar_KW: "ar"
    };
    document.documentElement.setAttribute("lang", langMap[lang] || "zh-CN");
    localStorage.setItem("site-lang", lang);
  }, [lang]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout lang={lang} onLangChange={setLang}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/components/button" replace />} />
            {docRoutes.map((route) => {
              const LazyComponent = lazy(route.component);
              return <Route key={route.path} path={route.path} element={<LazyComponent />} />;
            })}
          </Routes>
        </Suspense>
      </Layout>
      <ThemeGenerator device="web" />
    </BrowserRouter>
  );
}

export default App;
