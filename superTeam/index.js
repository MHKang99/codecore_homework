const express = require('express');
const logger = require('morgan');
const path = require('path')
const methodOverride = require('method-override');
// const noteRoutes = require('./routes/notes');
const app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
// Method Override
app.use(
    // Without this, we cannot accept DELETE or PATCH or PUT requests from
    // the browser!
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            // This modifies the request object
            // it changes it from a POST request
            // to be whatever the value for _method was
            // within the form that was just submitted
            return method;
        }
    })
);

app.get('/', (req, res)=> {
    res.render('welcome')
})



const cohortsRoute = require('./routes/cohorts')

app.use('/cohorts', cohortsRoute);

//-------------server----------------
//start listening to the server
// needs a port to listen to

const PORT = 3000;
const DOMAIN = "localhost" // loop back adress: 127.0.0.1

app.listen(PORT, DOMAIN,()=>{
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})