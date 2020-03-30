import React, { useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

import './PlanetDropdown.scss'
import Api from '../../services/api'

const PlanetDropdown = ({ callbackPlanets }) => {
  const [planets, setPlanets] = useState()
  const updatePlanetsState = (planets) => setPlanets(planets)

  useEffect(() => {
    Api.GetAllPlanets(updatePlanetsState)
  }, []);

  const handleChange = event => {
    callbackPlanets(event.target.value)
  };

  return (
    <div>
      <InputLabel id="select-planets-label">Planets</InputLabel>
      <Select
        className="select"
        labelId="select-planets-label"
        id="select-planets"
        onChange={handleChange}>
          <MenuItem>--</MenuItem>
        {planets?.map((planet, index) =>
          <MenuItem value={planet.name} key={index}>{planet.name}</MenuItem>)}
      </Select>
    </div>
  )
}
export default PlanetDropdown;
