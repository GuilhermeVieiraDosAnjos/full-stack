const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors')


require('./config/dbConfig')

app.use(cors())
app.use(express.json())
app.use(routes);


app.listen(3333 , ()=> {
  console.log("Servidor executando na porta 3333");
  console.log("Acessar http://localhost:3333")
});