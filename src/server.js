const express = require("express");
// require("dotenv").config();
// const morgan = require('morgan');
const cors = require('cors')
const { connect } = require("./db")
// const applicationRoutes = require('./routes')


const app = express();
const port = process.env.PORT || 8080;
connect();

app.use(express.json())
// app.use(morgan('tiny'))
app.use(cors())

// applicationRoutes(app)

app.get('/', (req, res)=>{
  res.status(200).json({message: 'ok updated', data: 'updated'})
})

app.listen(port, () => {
  console.log(`✅ Server listening on port ${port}!`)
})
