import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "react-mobile-ui/dist/index.esm.js";
import "react-mobile-ui/dist/style.css";

function App() {
  return (
    <div>
      <Button variant="ghost"  size="lg">
        按钮  
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
