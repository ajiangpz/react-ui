import React from "react";
import ReactDOM from "react-dom/client";
import { FancyButton } from "twui-react"; 
import "twui-react/esm/style.css";


function App() {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <FancyButton variant="ghost" colorScheme="success" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="solid" colorScheme="success" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="outline" colorScheme="success" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="link" colorScheme="success" size="sm">
          Button
        </FancyButton>
      </div>
      <div className="flex gap-4 p-4">
        <FancyButton variant="ghost" colorScheme="danger" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="solid" colorScheme="danger" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="outline" colorScheme="danger" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="link" colorScheme="danger" size="sm">
          Button
        </FancyButton>
      </div>
      <div className="flex gap-4 p-4">
        <FancyButton variant="ghost" colorScheme="warning" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="solid" colorScheme="warning" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="outline" colorScheme="warning" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="link" colorScheme="warning" size="sm">
          Button
        </FancyButton>
      </div>
      <div className="flex gap-4 p-4">
        <FancyButton variant="ghost" colorScheme="default" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="solid" colorScheme="default" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="outline" colorScheme="default" size="sm">
          Button
        </FancyButton>
        <FancyButton variant="link" colorScheme="default" size="sm">
          Button
        </FancyButton>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
