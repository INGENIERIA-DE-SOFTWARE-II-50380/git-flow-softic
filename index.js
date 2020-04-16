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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});
