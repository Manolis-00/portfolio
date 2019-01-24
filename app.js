var express          = require("express"),
    methodOverride   = require("method-override"),
    app              = express(),
    expressSanitizer = require("express-sanitizer"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose");

//APP CONFIGURATION
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); //επιτρέπει την χρηση των .ejs αρχειων
app.use(express.static(__dirname + "/public")); //επιτρέπει την πρόσβαση στο public directory

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/contact", function(req, res){
    res.render("contact");
});


app.listen(3000, function(){
    console.log("Server has started!!!")
});
