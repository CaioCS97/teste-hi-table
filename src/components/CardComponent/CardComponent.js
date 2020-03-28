import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, FormControl, TextField, Tooltip, IconButton, Button } from '@material-ui/core';

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
    const [planetValue, setPlanetValue] = useState("");

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
      console.log()
      console.log(value);
      if (!value) return;
      App.addItem(value);
      setValue(e.target.value);
    }

    const onclickTeste = e => {     
      e.preventDefault()
      console.log("0--------->",  e.target)
      setValue("xptop")
      console.log(value)
    }

    const callback= e =>{
      console.log("----AAAAAA libaba , kalifa esta de olho   --->",e)
      setPlanetValue(e)
    }


    // const addItem = text => {
    //   const newItems = [...items, { text }];
    //   setItems(newItems);
    // };

    return (
      <Card className="cards">
        
        Leticia esta no mundo da  {planetValue} times
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <FormControl className="formControl">
            <PlanetDropdown playback={callback} />
            <TextField className="textField"  id="lblpto" onChange={event => setValue(event.target.value)} label="Description" />
            <Button onClick={onclickTeste}>Botao Capirotico  </Button>
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
