$( document ).ready(function() {

  $('body').prepend(
    "<nav><div class='nav-wrapper'><a href='index.html' class='brand-logo'>ПИБУ2018</a></div></nav>");

/* Тут две функции, каждая относится к одному из вариантов, удалите ненужный */

//  Первый вариант
function oneOption (param){
  if (param == "test"){
    return true;
  }

}

//  Второй вариант
function twoOption (param){
  if (param == "test"){
    return true;
  }

}

 /*Все что ниже, это понты, можете удалять, кроме самой нижней строки - " }); " */

  var test ="test";
  if (oneOption(test) != null && twoOption(test) != null){
    $('body').append("<div class='col s6 offset-s3 center-align'><h1 class='white-text'>Welcome</h1><h2 class='white-text'>Выберите Вариант</h2><br><br><div class='col s6'><a id='one' class='waves-effect waves-light btn-large'>Первый</a></div><br><div class='col s6'><a id='two' class='waves-effect waves-light btn-large'>Второй</a></div></div>")
  }


});
