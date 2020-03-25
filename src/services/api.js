import React from 'react';
import { useEffect, useState } from 'react';

import Axios from 'axios';

const Planets = () => {

    const [planets, setPlanets] = useState();

    useEffect(() => {
        Axios.get(`https://swapi.co/api/planets/?format=json`)
        .then(res => {
            setPlanets(res.data.results);       
        });
    }, []);

    console.log(planets);

    return (
        <div>
            planets
        </div>
    )
}
export default Planets;
