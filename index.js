const express = require("express");
const { engine } = require("express-handlebars");
const body = require("body-parser");
const app = express();
const { Pool } = require("pg");
require('dotenv').config()
app.use(express.static("public"));
app.use(body.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));
app.use(body.json({ limit: '50mb' }));
app.engine(
    "handlebars",
    engine({ layoutsDir: "views/layouts", defaultLayout: "main" })
);
app.set("view engine", "handlebars");
var connectionstr = process.env.DATABASE_URL;
var pool;
if (connectionstr) {
    pool = new Pool({
        connectionString: connectionstr,
        ssl: { rejectUnauthorized: false },
    });
} else {
    pool = new Pool({
        user: "postgres",
        host: "localhost",
        port: 5432,
        password: "mthobisi",
        database: "users",
        ssl: false,
    });
}
const useRoutes = require("./js/routes")(pool);
///Get Routes
app.get('/', useRoutes.home);
app.get('/projects', useRoutes.projects)
    //Post routes


/// Admin Panel Get Route
app.get('/admin/:username', useRoutes.admin)

/// Admin Panel Post Route
app.post('/login', useRoutes.logInPost);
app.post('/newproject', useRoutes.newProject)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});