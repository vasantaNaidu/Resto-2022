require('./config/db');
	
const server = require('express')();
const port = process.env.PORT || 8080;

const cors = require('cors');
server.use(cors);

const UserRouter = require('./api/User');

const bodyParser = require('express').json;
server.use(bodyParser());

server.use('/user', UserRouter)

server.listen(port, () => {
    console.log('Server Running on port ${port}');
})