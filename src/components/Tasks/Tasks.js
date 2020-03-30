import React, { useState } from "react";

import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip, IconButton } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


import CardComponent from "../CardComponent/CardComponent";
import './Tasks.scss'

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    const newTasks = [...tasks, { task }];
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const TableRowResult = () => {
    return (
      tasks.map((task, index) => (
        <TableRow key={index}>
          <TableCell>{task.task.planetValue}</TableCell>
          <TableCell>{task.task.description}</TableCell>
          <TableCell>
            <Tooltip title="Excluir">
              <IconButton className="button" onClick={() => removeTask(index)}>
                <DeleteOutlineIcon fontSize="small" color="secondary" />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      ))
    )
  }

  return (
    <div className="center">
      <div className="container">
        <CardComponent
          addTask={addTask}
        />
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Planeta</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell className="headerExcluir">Excluir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowResult />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Tasks;
