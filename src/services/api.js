import Axios from 'axios';

const url = `https://swapi.co/api/planets/?format=json`
const GetAllPlanets = (callback) => {
  return Axios.get(url)
    .then(res => {
      callback(res.data.results)
    });
}

export default { GetAllPlanets };
