import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, InputLabel, FormControl, TextField } from '@material-ui/core';

import Axios from 'axios';


const PlanetDropdown = () => {

    const [planets, setPlanets] = useState()
    const [planet, setPlanet] = useState('')

    const useStyles = makeStyles(theme => ({
        select: {
          minWidth: 250,
        }
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
            <InputLabel id="select-planets-label">Planets</InputLabel>
            <Select
                className={classes.select}
                labelId="select-planets-label"
                id="select-planets"
                value={planet ? planet : ''}
                onChange={handleChange}>
                {planets?.map((planet, index) =>
                    <MenuItem value={planet.name} key={index}>{planet.name}</MenuItem>)}
            </Select>
        </div>
    )
}
export default PlanetDropdown;
