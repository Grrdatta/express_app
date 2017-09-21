//create a varible express and we use all node modules present in express
var express=require('express');
//it going to specify  that app is new express app now the app has all methods in the express eg:app.get....
var app=express();
//to run type node app.js in cmd
//Routes is a web development frame work.it binding in some functionality when we use request object
//express contain a templeting engine called ejs it is used  for creating one templete file
//we need to specify the view engine because if we render ejs file we dint set the view to ejs we get error
//setting ejs
app.set('view engine','ejs');
//we to tell our app.js to access to the routes files
var routes=require('./routes');
//we need to specify the directory of static assets so we require a module called path
var path=require('path');
//what this doing is it telling express thst these static assets are in public path directory the reson is if we tried to access the img you wouldn't be able to get it initially with the url we set so now the app automatically look any public directories for all static assets like style sheets,img etc
app.use(express.static(path.join(__dirname,'public')));

// first hear is url we visiting,second is call back funtion
app.get('/',routes.home);//function(req,res){
    //we can use html to the text like h2,h1 colour etc
    //res.send("this is a server response on the home page");
    //render by default checks in viewes directory
    //express can pass the info to a templete
    //res.render('home',{
    	//title:"game of thrones movies"
    	//we have to loop to data for example we loop through movie poster img
         //movies:["The first movie","The Second Movie","The third movie"]
  //  });
//});
//movie_single
app.get('/game/:episode_number?',routes.movie_single);//function(req,res)
//{
    //hear when we type the episode numbers those arre stored in episode_number
//var episode_number=req.params.episode_number;
//res.send("this is the page for episode"+episode_number);
//});
//not found it is like 404 error
app.get('*',routes.notFound);//function(req,res)
//{
   // res.send("this is not the page that you are looking for");
//}//);

//we have to get port to run
app.listen(process.env.PORT || 3000);//3000,function()
//{
   //console.log("the app is running local host 3000");
//});

//app.listen(process.env.port||3000);
