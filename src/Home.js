import React from "react";
import { Typography, Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h3">Bienvenido a Sara's App</Typography>
      <Typography variant="body1">Selecciona una opción en la barra de navegación.</Typography>
    </Box>
  );
}

export default Home;
