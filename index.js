
var dir = "./"; //local directory
// var dir = "/cv/";  //github directory

$(function(){
    $("#header").load(dir + "base/header.html"); 
    $('head').append('<link rel="stylesheet" href="'+ dir + 'css/style.css" >');
    $("#body").load(dir + "pages/home.html")
    $("#footer").load(dir + "base/footer.html"); 
  });
  

  const render = (value) =>{
    $("#body").load(dir + value)
  }