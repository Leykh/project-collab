import "@babel/polyfill/noConflict";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import _ from "lodash";
import path from 'path';

import { addPoste, addRessCat } from "./models/ressource.model";

import { init, autorisation } from "./utils/auth";
const cloudinary = require("cloudinary").v2;
const multer = require('multer');

const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3000",
            "http://localhost:5000",
            "http://localhost:3000/ressource",
            "http://localhost:3000/ressource/ressource",
            "http://localhost:3000/upload",
            "http://localhost:3000/register",
            "http://localhost:5000/register",
            "http://192.168.153.1:3000/",
            "http://192.168.153.1:3000/ressource",
            "http://192.168.153.1:3000/ressource/ressource",
            "http://192.168.153.1:3000/upload",
            "http://192.168.153.1:3000/register",
            "http://192.168.153.1:5000/",
            "http://192.168.153.1:5000/ressource",
            "http://192.168.153.1:5000/ressource/ressource",
            "http://192.168.153.1:5000/upload",
            "http://192.168.153.1:5000/register",
            "http://192.168.153.1:5000/connexion",
            "http://192.168.153.1:5000/connexion/authcontroll",
            "http://192.168.153.1:3000/connexion",
            "http://192.168.153.1:3000/connexion/authcontroll",
        ],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Methods",
            "Access-Control-Request-Headers"
        ],
        credentials: true,
        enablePreflight: true
    })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('nice-Ressource'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => init(req, res, next));

app.use("/", indexRouter);

const storage = multer.memoryStorage();
const upload = multer({ storage });

// SEND FILE TO CLOUDINARY + ADD NEW POSTE

app.post('/upload', upload.single('selectedFile'), (req, res) => {

    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    // Update for datauri module:
    const DatauriParser = require("datauri/parser");
    const parser = new DatauriParser();
    // for getting the string from the file buffer

    const file = parser.format(
        path.extname(req.file.originalname).toString(),
        req.file.buffer
    ).content;

    let uniqueFilename = req.file.originalname;

    let { title, categorie, type, description, privee, userID } = req.body;

    cloudinary.uploader.upload(

        // file is required ofc
        file,
        // options here
        {
            public_id: `REssources_relationnelles/${uniqueFilename}`,
            resource_type: "raw"
        },
        function (err, file) {
            if (err) return res.send(err)

            // return image details
            const newDocURL = file.secure_url;
            //const cloudID = file.public_id;

            const categories = categorie.split(',')
            console.log("APP", categories)

            let poste = addPoste({ title, newDocURL, type, description, privee, userID }).then(
                (response) => { addRessCat(categories, response.rows[0].id) }
            ).catch((e) => {
                console.log("APP ERROR", e)
            });
            res.json(poste);
        }
    )
});

module.exports = app;