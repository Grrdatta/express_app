// this varible is accessed in this routes 
var moviesJson=require('../movies.json');
 
// first hear is url we visiting,second is call back funtion
exports.home=('/',function(req,res){
    //it gets the movies array in json file and stored in movies varible
    var movies=moviesJson.movies;
    //we can use html to the text like h2,h1 colour etc
    //res.send("this is a server response on the home page");
    //render by default checks in viewes directory
    //express can pass the info to a templete
    res.render('home',{
    	title:"Game of throwns",
        movies:movies
    	//we have to loop to data for example we loop through movie poster img
         //movies:["The first movie","The Second Movie","The third movie"]
    });
});
//movie_single
exports.movie_single=('/game/:episode_number?',function(req,res)
{

    //hear when we tpye the episode numbers those arre stored in episode_number
var episode_number=req.params.episode_number;

//res.send("this is the page for episode"+episode_number);
//it is the array of movies in json file
var movies=moviesJson.movies;
//when the user give the episode number 0 or more than 6 then we get an error so we only render the pages between 1 and 6 so we write a condition and in else part we give the 404 error
if(episode_number>=1&&episode_number<=6)
{
//episode num parameter in request in url we have to create a sepate pages but we used to do in dynamacally so we want a varible to writing and storing so we use var movies
//we use -1 becase we give id from 1 ie:id=1 but for array indexing start from 0
var movie=movies[episode_number-1];
//to get the title for the other values
var title=movie.title;
//the main characters present in json data as a array
var main_characters=movie.main_characters;
//instead of res.send we use res.render and use movie_single templete 
res.render('movie_single',{
    movies:movies,
    title:title,
    movie:movie,
    main_characters:main_characters
});
}else {
   //res.send("this is not the page u r looking for");
   res.render('notFound',{
movies:movies,
title:"this is not the page you are looking for"
   });
}   

});
//not found it is like 404 error
exports.notFound=('*',function(req,res)
{
    var movies=moviesJson.movies;
     res.render('notFound',{
        movies:movies,
        title:"this is not the page you are looking for"
    //res.send("this is not the page that you are looking for");
});});
