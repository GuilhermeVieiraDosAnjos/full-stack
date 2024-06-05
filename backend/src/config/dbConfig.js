const mongoose = require('mongoose');
const dbConfig = "mongodb+srv://DosAnjos:Gui15032002%40Anjos%23@cluster0.wq2wg.mongodb.net/annotations?retryWrites=true&w=majority"

const connection = mongoose.connect(dbConfig)
    .then(()=> {
      console.log('Conectei a base de dados')
    }).catch(e=>console.log(e));

module.exports = connection;

