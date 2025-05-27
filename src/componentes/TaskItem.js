import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Componente que muestra una tarea
function TaskItem({ task }) {
  return (
    <Box
      sx={{
        padding: "20px",
        margin: "10px",
        backgroundColor: "rgba(26, 96, 124, 0.8)",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {task.title}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        {task.description}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
        Fecha de vencimiento: {task.dueDate}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: "10px" }}
      >
        Marcar como completada
      </Button>
    </Box>
  );
}

export default TaskItem;
