const express = require('express');
const mysql = require('mysql');

const router = express.Router();

var db = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  insecureAuth: true,
  database: 'gbooks'
});

db.connect();

router.get('/', async (req, res, next) => {
  db.query(
    `CREATE TABLE books (
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    book_title TEXT NOT NULL,
    book_desc TEXT NOT NULL,
    page_count INT (10) NOT NULL,
    publisher_id INT (10) NOT NULL
    )`,
    (error, results, fields) => {
      console.log(error);
      console.log(results);

      return res.json('OK');
    }
  );
});

module.exports = router;
