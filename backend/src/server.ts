import express from 'express';
import Cors from './middlewares/cors';

const app = express();
const port = 3001;
const cars = require ("./routes/cars");

// Config
app.use(Cors)

// Routes
app.use(cars);

// Server
app.listen(port, () => {
  console.log(`\n#################################`);
  console.log(`# SERVER RUNNING ON PORT ${port}`);
  console.log(`#      READY TO ROCK!!! 🤘🏼`);
  console.log(`#################################\n`);
  return;
});