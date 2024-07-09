import "dotenv/config";
import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: "mysql",
});

connection.connect((err) => {
  if (err) return err;
  console.log("Connected to MySQL database!");
});



export default connection;
