import express from 'express';
import bodyParser from 'body-parser'
import Cors from './middlewares/cors';
import db from './dbAccess';
import morgan from 'morgan';
import cars from "./routes/cars";

const app = express();
const port = 3001;

// Config
app.use(Cors)
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

async function loadConfig () {
  try {
    await db.authenticate();
    console.log('DB connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


// Routes
app.use(cars);

// Server
loadConfig().then(()=>
  app.listen(port, () => {
    console.log(`\n#################################`);
    console.log(`# SERVER RUNNING ON PORT ${port}`);
    console.log(`#      READY TO ROCK!!! 🤘🏼`);
    console.log(`#################################\n`);
    return;
  })
)