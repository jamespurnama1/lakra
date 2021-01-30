/* eslint-disable no-param-reassign */
import axios from 'axios';

export default () => {
  axios.get('https://v1.nocodeapi.com/jamespurnama1/airtable/uZXOlhWVbiythiZt', {
    params: {
      tableName: 'Main',
      view: 'Live',
    },
  })
    .then((response) => {
    // handle success
      console.log(response);
      const data = response.data.records.map((item) => ({
        id: item.id,
        ...item.fields,
      }));
      return data;
    })
    .catch(() => {
      // handle error
      // console.log(error);
    });
};
