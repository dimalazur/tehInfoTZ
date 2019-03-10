import axios from 'axios';

const getHouseMap = () => (
  axios.get('http://www.json-generator.com/api/json/get/bVevTcnsLC?indent=2')
);

export default {
  getHouseMap,
};