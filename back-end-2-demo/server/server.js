// let apple = require('./controller')

// console.log(apple)

//when not giving file path it accesses node_modules folder
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//links to conrtoller and destructures functions
const {
    getMovies,
    addMovie,
    updateRating,
    deleteMovie
} = require('./controller')

//calling functions from controller
app.get('/api/movies', getMovies);
app.post('/api/movies', addMovie);
app.put('/api/movies/:id', updateRating);
app.delete('/api/movies/:id', deleteMovie);




app.listen(4004,console.log("Server is running on 4004"));