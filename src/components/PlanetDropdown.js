import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, InputLabel, FormControl, TextField } from '@material-ui/core';

import Axios from 'axios';


const PlanetDropdown = () => {

    const [planets, setPlanets] = useState()
    const [planet, setPlanet] = useState('')

    const useStyles = makeStyles(theme => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 250,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    const classes = useStyles();

    useEffect(() => {
        Axios.get(`https://swapi.co/api/planets/?format=json`)
        .then(res => {
            setPlanets(res.data.results);       
        });
    }, []);    

    const handleChange = event => {
        setPlanet(event.target.value);        
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <div>
                    <TextField id="description" label="Description" />
                </div>
                <br/>
                
                <InputLabel id="select-planets-label">Planets</InputLabel>
                <Select
                    labelId="select-planets-label"
                    id="select-planets"
                    value={planet ? planet : ''}
                    onChange={handleChange}>
                    {planets?.map((planet, index) =>
                        <MenuItem value={planet.name} key={index}>{planet.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}
export default PlanetDropdown;
