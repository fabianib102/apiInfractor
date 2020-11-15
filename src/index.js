const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({
   extended: false 
}))
app.use(express.json())


//route
app.use('/api/user',require('./routes/index'));
app.use('/api/vehicles',require('./routes/vehicles'));


app.listen(3000, ()=>{
    console.log("Server on port: ", app.set('port', 3000));
})