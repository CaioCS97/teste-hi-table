import React, { useState } from 'react';

import { Card, FormControl, TextField, Tooltip, IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';

import PlanetDropdown from '../PlanetDropdown/PlanetDropdown';
import './CardComponent.scss'

const CardComponent = ({ addTask, removeTask, index }) => {

  const [planetValue, setPlanetValue] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!description || !planetValue) return;

    addTask({ planetValue, description })
    setPlanetValue("");
    setDescription("");
  }

  const callback = e => {
    setPlanetValue(e)
  }

  return (
    <Card className="cards">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <FormControl className="formControl">
          <PlanetDropdown callbackPlanets={callback} />
          <TextField className="textField" onChange={event => setDescription(event.target.value)} label="Description" />
        </FormControl>
        <div className="buttons">
          <Tooltip title="Excluir">
            <IconButton onClick={() => removeTask(index)}>
              <DeleteOutlineIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Adicionar">
            <IconButton type="submit">
              <AddIcon color="primary" />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </Card>
  );
};
export default CardComponent;
