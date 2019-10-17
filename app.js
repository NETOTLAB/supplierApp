var express =require('express');
const path =require('path');
var bodyParser = require('body-parser');
const clientRoute = require('./routes/client-route');

const ordersRoutes = require('./routes/orders-routes');


var app = express();
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use(clientRoute);

app.use(ordersRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(2000);