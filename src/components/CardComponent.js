import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, FormControl, TextField, Tooltip, IconButton } from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';

import PlanetsDropdown from './PlanetDropdown/PlanetDropdown'

const CardComponent = () => {
    const useStyles = makeStyles(theme => ({
        container: {
            maxWidth: "sm"
        },
        cards: {
          minHeight: 150,
          minWidth: 350,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
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
            flexDirection: 'column'
        }
      }));
    const classes = useStyles();

    return (
      <Card className={classes.cards}>
        <FormControl className={classes.formControl}>
          <PlanetsDropdown />
          <TextField className={classes.textField} label="Description" />
        </FormControl>

        <div className={classes.buttons}>
          <Tooltip title="Excluir">
            <IconButton>
              <DeleteOutlineIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Adicionar">
            <IconButton>
              <AddIcon color="primary" />
            </IconButton>
          </Tooltip>
        </div>
      </Card>
    );
};
export default CardComponent;
