import express from "express";
import "./models/index.js";
import Router from "./Routes.js"
const app = express();
const port = process.env.PORT;

app.use(cors());
(async () => {
  try {
    await db.authenticate(); 
    console.log('Database connected...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
app.use('./api', Router);
app.listen(port, () => {
  console.log(`Server running in ${port}`);
});