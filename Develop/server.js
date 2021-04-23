// Dependencies

const express = require('express');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3000;
// Sets up the Express App
// Creating an Express Instance
const app = express();

// -- Middleware -- //
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// -- Routes -- //
/*
app.get('/', (req, res) => {

    return 
});
*/

// To refernece routes with Express Router
//app.use('/api', apiRoutes);

// To PASS the Express APP reference to our routes
require('./routes/apiRoutes')(app);
require('./routes/htmlroutes')(app);

// -- Server is Listening -- //
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));