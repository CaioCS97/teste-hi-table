import React, { useState } from "react";

import CardComponent from "../CardComponent/CardComponent";
import './Tasks.scss'

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
    </div>
  );
};
export default Tasks;
