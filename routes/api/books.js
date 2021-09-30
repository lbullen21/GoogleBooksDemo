const express = require('express');
const axios = require('axios');

const router = express.Router();

const googleBooksAxios = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

router.get('/', async (req, res, next) => {
  const { q } = req.query;

  const result = await googleBooksAxios.get(`/volumes`, {
    params: {
      q
    }
  });

  return res.json(result.data.items[0]);
});

module.exports = router;
