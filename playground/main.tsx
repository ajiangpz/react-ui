import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "twui-react"; 
import "twui-react/esm/style.css";


function App() {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <Button variant="ghost" colorScheme="success" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="success" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="success" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="success" size="sm">
          Button
        </Button>
      </div>
      <div className="flex gap-4 p-4">
        <Button variant="ghost" colorScheme="danger" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="danger" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="danger" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="danger" size="sm">
          Button
        </Button>
      </div>
      <div className="flex gap-4 p-4">
        <Button variant="ghost" colorScheme="warning" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="warning" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="warning" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="warning" size="sm">
          Button
        </Button>
      </div>
      <div className="flex gap-4 p-4">
        <Button variant="ghost" colorScheme="default" size="sm">
          Button
        </Button>
        <Button variant="solid" colorScheme="default" size="sm">
          Button
        </Button>
        <Button variant="outline" colorScheme="default" size="sm">
          Button
        </Button>
        <Button variant="link" colorScheme="default" size="sm">
          Button
        </Button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
