import React, { useState } from "react";
import ResponsiveAppBar from "./componentes/AppBar";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import Footer from "./componentes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("Inicio");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  let content;
  switch (selectedPage) {
    case "Blog":
      content = <App2 />;
      break;
    case "Tareas":
      content = <App3 />;
      break;
    default:
      content = <App1 />;
      break;
  }

  return (
    <div className="App">
      <ResponsiveAppBar handlePageChange={handlePageChange} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
