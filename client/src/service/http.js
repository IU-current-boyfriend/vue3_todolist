import axios from 'axios';
import qs from 'qs';


axios.defaults.baseURL = 'http://localhost:3000';

const httpGet = url => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      // console.log('res: =>', res);
      if (res.data.err_code !== 0) reject(res.msg);
      resolve(res.data.data);
    }).catch(err => {
      reject(err);
    });
  });
};

const httpPost = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url
    }).then(res => {
      if (res.data.err_code !== 0) reject(res.msg);
      resolve(res.data.data);
    }).catch(err => {
      reject(err);
    });
  })
};

export {
  httpGet,
  httpPost
}