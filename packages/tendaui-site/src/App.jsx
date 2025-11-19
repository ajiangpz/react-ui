import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { ThemeGenerator } from "@tendaui/theme-generator";
import siteConfig from "../site.config.mjs";

// 生成路由
function getRoute(docs, routes = []) {
  docs.forEach((doc) => {
    if (doc.children) {
      doc.children.forEach((child) => {
        routes.push({
          path: child.path,
          component: child.component,
          title: child.title
        });
      });
    }
  });
  return routes;
}

const docRoutes = getRoute(siteConfig.docs, []);

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
