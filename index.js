import Express from "express";
import cors from "cors";
import session from "connect-session-sequelize";
import dotenv from "dotenv";

//import db from "./config/Databese";
dotenv.config();

const app = Express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(Express.json());


app.listen(process.env.APP_PORT, ()=> {
    console.log('server up and running...')
});