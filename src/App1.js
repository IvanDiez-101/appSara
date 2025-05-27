import "./App.css";
import MapComponent from "./componentes/Mapa";
import CarouselApp from "./componentes/Carousel";

import { Typography, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          padding: "20px",
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "40px",
          textAlign: "center",
          backgroundColor: "rgba(26, 96, 124, 0.8)", 
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Un viaje por Europa
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", fontStyle: "italic", textAlign: "justify" }}
        >
          A lo largo de nuestro gran viaje por Europa, descubrimos que hablar y
          escuchar es algo muy importante. Cada país tiene su propio idioma, ¡y
          cada uno es como una llave mágica que abre puertas a nuevas aventuras!
          Al igual que los cuentos que nos cuentan en la escuela, las palabras
          son como personajes que nos ayudan a entender las historias de otras
          personas. Así que, mientras viajamos, aprendemos que todas las lenguas
          son como colores diferentes que hacen que nuestro mundo sea mucho más
          bonito y divertido.
        </Typography>

        <MapComponent marginTop="20px" />
      </Box>
      <div style={{ marginBottom: "40px" }}>
        <CarouselApp />
      </div>
    </div>
  );
}

export default App;