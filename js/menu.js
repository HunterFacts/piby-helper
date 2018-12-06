/* Тут две функции, каждая относится к одному из вариантов, удалите ненужный */

//  Первый вариант
function oneOption (param){

  if (param == "test"){
    return true;
  }
  if ($('#int').val() != 0 && $('#int').val() != null && $('#int').val() > 0){
    var int = $('#int').val();
    var symm = 0;
    var text = "";
  }
  else {
    return alert('Введите число больше 0');
  }
  if (param == "Факториал"){
    symm = 1;
    for (var i = 1; i <= int; i++){
      symm = symm*i;
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "СуммаКубов"){
    var iV2 = 0;
    for (var i = 1; i <= int; i++){
      if(i%2 == 0){
        iV2 = i*i;
        symm = iV2 + symm;
      }
    text = $("#otvet").html(symm);

    }
  }
  else if (param == "КолВоЧетных"){
    for (var i = 0; i < int.length; i++){
      if(int[i]%2 == 0){
        symm++;
      }
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "МаксЦифра"){
    symm = int[0];
    for (var i = 1; i < int.length; i++){
        if (symm < int[i]){
          alert(int[i]);
          symm = int[i];
        }
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "ПростоеЛиЧисло"){

    symm = 'Да';
    for (var i = 2; i < int; i++){
      if (int%i == 0){
        symm = 'Нет';
        break;
      }
    }

    text = $("#otvet").html(symm);
    if (int == 2){
      text = $("#otvet").html('Нет');
    }
  }
  else {
    return null;
  }
  return text;
}

//  Второй вариант
function twoOption (param){
  if (param == "test"){
    return true;
  }

}


$( document ).ready(function() {

  $('body').prepend(
    "<nav><div class='nav-wrapper'><a href='index.html' class='brand-logo'>ПИБУ2018</a></div></nav>");

 /*Все что ниже, это понты, можете удалять, кроме самой нижней строки - " }); " */

  var test ="test";
  if (oneOption(test) != null && twoOption(test) != null && $('title').text() == "Пибу2018"){
    $('body').append("<div class='col s6 offset-s3 center-align'><h1 class='white-text'>Welcome</h1><h2 class='white-text'>Выберите Вариант</h2><br><br><div class='col s6'><a id='one' href='oneoption.html' class='waves-effect waves-light btn-large'>Первый</a></div><br><div class='col s6'><a id='two' href='twooption.html' class='waves-effect waves-light btn-large'>Второй</a></div></div>")
  }

// Эту строку не трогать! Этот коммент можете удалить
});
