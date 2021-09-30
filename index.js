const express = require('express');

const app = express();

const port = 1930;

app.use('/health', require('./routes/health'));
app.use('/database', require('./routes/database/tables'));
app.use('/books', require('./routes/api/books'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
