import axios from 'axios';

const apiController = () => axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // headers: {
  //   'Accept': 'application/json, text/plain, */*',
  //   'Content-type': 'application/json; charset=UTF-8',
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  // },
});

export default apiController();

// export default () => axios.create({
//   baseURL: '/',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//     'X-Requested-With': 'XMLHttpRequest',
//   },
// });
