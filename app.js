const express = require('express');
const cors = require('cors');
const app = express();
const filesRouter = require('./routes/file');

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());
app.use('/api/files', filesRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
