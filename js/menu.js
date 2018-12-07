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
    return $("#otvet").html('Введите число больше 0');
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
  else if (param = "Массив"){
    symm = "";
    var symmBig = 0;
    var symmV2 = "";
    var symmSort = "";
    var arraySort = [];
    var symmIntArray = 0;
    var arraymenu = [];
    for (var i = 1; i <= int; i++){
      arraymenu[i] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      symmIntArray=symmIntArray+ arraymenu[i];
      symm=symm+ arraymenu[i];
    }
    symmIntArray = symmIntArray/int;

    for (var i = 1; i <= int; i++){
      if (arraymenu[i] > symmIntArray){
        symmV2 = symmV2 + arraymenu[i];
      }
    }

    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    arraySort = arraymenu.sort(compareNumeric);
    for (var i = 0; i < arraySort.length-1; i++){
        symmSort = symmSort + arraySort[i]
    }
    for (var i = 1; i < symm.length; i++){
        if (symmBig < Number(symm[i])){
        /*  alert (symmBig + "<" + Number(symm[i]));*/
          symmBig = Number(symm[i]);
        }
    }
    text = $("#otvet").html( "- Массив: "+"<br />"+symm+"<br />"+"- Поиск максимального элемента в одномерном массиве: "+"<br />"+symmBig+"<br />"+"- Поиск количества элементов одномерного массива боль-ших, чем среднее арифметическое значение всех элементов массива: "+"<br />" + symmV2+"<br />" + "- Сортировка одномерного массива по возрастанию: "+"<br />" + symmSort );


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
  if ($('#int').val() != 0 && $('#int').val() != null && $('#int').val() > 0){
    var int = $('#int').val();
    var symm = 0;
    var text = "";
  }
  else {
    return $("#otvet").html('Введите число больше 0');
  }
  if (param == "Сумма"){
    symm = 1;
    for (var i = 1; i <= int; i++){
      symm = symm+i;
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "СуммаКубов"){
    var iV2 = 0;
    for (var i = 1; i <= int; i++){
      if(i%2 != 0){
        iV2 = i*i;
        symm = iV2 + symm;
      }
    text = $("#otvet").html(symm);

    }
  }
  else if (param == "КолВоНечётных"){
    for (var i = 0; i < int.length; i++){
      if(int[i]%2 != 0){
        symm++;
      }
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "МинЦифра"){
    symm = int[0];
    for (var i = 1; i < int.length; i++){
        if (symm > int[i]){
          symm = int[i];
        }
    }
    text = $("#otvet").html(symm);
  }
  else if (param == "КоличествоДелителейЧисла"){

    symm = "";
    for (var i = 1; i <= int; i++){
      if (int%i == 0){
        if (i == int){
          symm = symm +i;
        }
        else {
          symm = symm +i + ",";
        }
      }
    }

    text = $("#otvet").html(symm);
    if (int == 2){
      text = $("#otvet").html('Нет');
    }
  }
  else if (param = "Массив"){
    symm = "";
    var symmSmall = 9;
    var symmV2 = "";
    var symmSort = "";
    var arraySort = [];
    var symmIntArray = 0;
    var arraymenu = [];
    for (var i = 1; i <= int; i++){
      arraymenu[i] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      symmIntArray=symmIntArray+ arraymenu[i];
      symm=symm+ arraymenu[i];
    }
    symmIntArray = symmIntArray/int;

    for (var i = 1; i <= int; i++){
      if (arraymenu[i] < symmIntArray){
        symmV2 = symmV2 + arraymenu[i];
      }
    }

    function compareNumeric(a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
    }
    arraySort = arraymenu.sort(compareNumeric);
    for (var i = 0; i < arraySort.length-1; i++){
        symmSort = symmSort + arraySort[i]
    }
    for (var i = 1; i < symm.length; i++){
        if (symmSmall > Number(symm[i])){
        /*  alert (symmBig + "<" + Number(symm[i]));*/
          symmSmall = Number(symm[i]);
        }
    }
    text = $("#otvet").html( "- Массив: "+"<br />"+symm+"<br />"+"- Поиск минимального элемента в одномерном массиве: "+"<br />"+symmSmall+"<br />"+"- Поиск количества элементов одномерного массива меньших, чем среднее арифметическое значение всех элементов массива: "+"<br />" + symmV2+"<br />" + "- Сортировка одномерного массива по убыванию: "+"<br />" + symmSort );


  }
  else {
    return null;
  }
  return text;
}



$( document ).ready(function() {

  $('body').prepend(
    "<nav><div class='nav-wrapper'><a href='index.html' class='brand-logo'>ПИБУ2018</a></div></nav>");

 /*Все что ниже, это понты, можете удалять, кроме самой нижней строки - " }); " */

  var test ="test";
  if (oneOption(test) != null && twoOption(test) != null && $('title').text() == "Пибу2018"){
    $('body').append("<div class='col s6 offset-s3 center-align'><h3>Welcome</h3><h4>Выберите Вариант</h4><br><br><div class='col s6'><a id='one' href='oneoption.html' class='waves-effect waves-light btn-large'>Первый</a></div><br><div class='col s6'><a id='two' href='twooption.html' class='waves-effect waves-light btn-large'>Второй</a></div></div>")
  }

// Эту строку не трогать! Этот коммент можете удалить
});
