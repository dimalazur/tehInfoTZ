import axios from 'axios';

const getUserList = () => (
  axios.get('http://www.json-generator.com/api/json/get/cqdgtwYLdu?indent=2')
);

export default {
  getUserList,
};