const express = require('express');
const axios = require('axios')
const app = express();

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

app.get('/homeList', (req, res) => {
  axios.post('https://api.millheat.com/uds/selectHomeList', {}, {
    headers: {
      access_token: process.env.access_token
    }
  }).then(response => {
    res.json(response.data)
  }).catch(ex => {
    return res.status(500).json({ type: 'error', message: ex.message });
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
