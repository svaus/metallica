const restify = require('restify');
const mongoose = require('mongoose');
const config = require('dotenv').config();

const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

server.listen(config.PORT, ()=> {
    mongoose.connect(config.MONGODB_URI, {
        //auth: {
        //  user: process.env.COSMODDB_USER,
        //  password: process.env.COSMOSDB_PASSWORD
        //},
        useNewUrlParser: true
      })
      .then(() => console.log('Connection to CosmosDB successful'))
      .catch((err) => console.error(err));
});

const db = mongoose.connection;
db.on('error', (err)=> console.log(err));

db.once('open', ()=> {
    require('./routes/metallica')(server);
    require('./routes/user')(server);
    console.log(`Server started on port ${config.PORT}`);
});

