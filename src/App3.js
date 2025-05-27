import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TaskItem from "./componentes/TaskItem"; // Asegúrate de que la ruta es correcta

function App3() {
  // Estado con algunas tareas predeterminadas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      dueDate: "2025-03-10",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      dueDate: "2025-03-15",
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 3",
      dueDate: "2025-03-20",
    },
  ]);

  // Función para agregar una nueva tarea
  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: `Tarea ${tasks.length + 1}`,
        description: `Descripción de la tarea ${tasks.length + 1}`,
        dueDate: `2025-03-${tasks.length + 10}`,
      },
    ]);
  };

  return (
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
        Tareas Pendientes
      </Typography>

      {/* Mostrar las tareas */}
      <Box sx={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </Box>

      {/* Botón para agregar una nueva tarea */}
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
        onClick={addTask}
      >
        Agregar Tarea
      </Button>
    </Box>
  );
}

export default App3;
