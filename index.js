
// var dir = "./";
var dir = "/cv/";

$(function(){
    $("#header").load(dir + "base/header.html"); 
    $('head').append('<link rel="stylesheet" href="'+ dir + 'css/style.css" >');
    // $("#footer").load("footer.html"); 
  });
  

  const render = (value) =>{
    $("#body").load(dir + value)
  }