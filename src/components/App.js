
import React from 'react';
import { Card } from '@material-ui/core';

import PlanetsDropdown from './PlanetDropdown'

const App = () => {
    return (
        <div class="container">
            <Card>
                <PlanetsDropdown />
            </Card>
        </div>
    );
};

export default App;
