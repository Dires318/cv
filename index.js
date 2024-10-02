
$(function(){
    $("#head").load("/cv/base/head.html"); 
    $("#header").load("/cv/base/header.html"); 
    $('head').append('<link rel="stylesheet" href="/cv/css/style.css" >');
    // $("#body").load("/cv/pages/home.html")
    $("#footer").load("/cv/base/footer.html"); 
  });
  

  // const render = (value) =>{
  //   $("#body").load(dir + value)
  // }