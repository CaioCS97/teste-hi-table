import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, FormControl, TextField, Tooltip, IconButton } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';

import PlanetDropdown from '../PlanetDropdown/PlanetDropdown';

import App from '../../App.js'

import './CardComponent.scss'

const CardComponent = ({item, index, addItem, remove}) => {
    const useStyles = makeStyles(theme => ({
        cards: {
          minHeight: 150,
          minWidth: 350,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        form: {
          display: 'flex',
          flexDirection: 'row'

        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 250
        },
        textField: {
          marginBottom: theme.spacing(3)
        },
        buttons: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
      }));
    const classes = useStyles();

    const [value, setValue] = useState("");

    // const [items, setItems] = useState([
    //   {
    //     text: "Learn about React",
    //   },
    //   {
    //     text: "Meet friend for lunch",
    //   },
    //   {
    //     text: "Build really cool todo app",
    //   }
    // ]);

    const handleSubmit = e => {     
      e.preventDefault();
      
      console.log(value);
      if (!value) return;
      App.addItem(value);
      setValue("");
    }

    // const addItem = text => {
    //   const newItems = [...items, { text }];
    //   setItems(newItems);
    // };

    return (
      <Card className="cards">
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <FormControl className="formControl">
            <PlanetDropdown />
            <TextField className="textField" label="Description" />
          </FormControl>

            <div className="buttons">
              <Tooltip title="Excluir">
                <IconButton>
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
