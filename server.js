// Dependencies ============================================================================================================
var express = require("express");
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser"); 
var methodOverride = require('method-override');
var app = express();	
var PORT = process.env.PORT || 3000; 

// BodyParser types =======================================================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with the Method-Override header in the request ================================================================
app.use(methodOverride('_method'));
app.use(express.static("public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Points the server to the controller file ===============================================================================
var connect = require("./controllers/burger_controller.js");
app.use('/', connect);

// App listener with an alert =============================================================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});