import React, { useState } from "react";

import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from "@material-ui/core";

import CardComponent from "../CardComponent/CardComponent";
import './Tasks.scss'

import ListIcon from '@material-ui/icons/List';

const Tasks = () => {
  const [tasks, setTasks] = useState([{}]);

  const addTask = task => {
    const newTasks = [...tasks, { task }];
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks, { index }];
    console.log('before', newTasks);
    newTasks.splice(index, 1);
    console.log('after', newTasks);

    setTasks(newTasks);
    console.log("aqui index=>", index);
    console.log("aqui tasks=>", tasks);
  }
  console.log(tasks.length);


  return (
    <div className="container">
      {tasks.map((task, index) => (
        <CardComponent
          key={index}
          index={index}
          item={task}
          addTask={addTask}
          removeTask={removeTask}
        />
      ))}
      {tasks.map((task, index) => (
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ListIcon />
              </Avatar>
            </ListItemAvatar>
              <ListItemText primary={task.planetValue} secondary={task.description} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
};
export default Tasks;
