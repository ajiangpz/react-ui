import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "react-ui";
const App = () => {
  return (
    <div>
      <Button content="abc"></Button>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
