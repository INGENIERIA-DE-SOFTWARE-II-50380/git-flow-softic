const express = require('express');
const app = express();

app.use(express.json())

app.post('/eco', (req, res) => {
  var echo = req.body.mensaje;
  res.status(200).send({
      status: true,
      mensaje: `escribiste: ${echo}`
  });
  console.log(`===> endpoint /eco con ${echo}`);
});

app.post('/fecha', (req, res) => {
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth()+1;
  d = n.getDate();
  var echo = d + "/" + m + "/" + y;
  res.status(200).send({
      status: true,
      mensaje: `Fecha actual: ${echo}`
  });
  console.log(`===> endpoint /fecha con ${echo}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});
