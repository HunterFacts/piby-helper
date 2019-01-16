// Имя логотипа
var logo = "ПИБУ2018";

//  Первый вариант
function oneOption (param){

  /*
  Здесь я проверяю, не пусто ли число или же не отрицательное
  var int = $('#int').val(); - это число вводимое пользователем, то есть:
  <input placeholder="Например: 1" id="int" type="number" class="validate">

  $("#otvet").html() - это блок куда выводиться результат, а точнее:
  <div class="card-panel col s12 m8 grey lighten-5 z-depth-1">
    <p id="otvet">ВОТ ЗДЕСЬ ОТВЕТ</p>
  </div>
  */
  if ($('#int').val() != 0 || $('#int').val() != null || $('#int').val() > 0){
    var int = $('#int').val();
    var symm = 0;
    var text = "";
  }
  else {
    //Если проверка не прошла выводим сообщение в #otvet
    return $("#otvet").html('Введите число больше 0');
  }
  /*
  Кнопка Факториал передает нашей функции параметр param = Факториал
  А значит мы входим внутрь этого if
  */
  if (param == "Факториал"){
    symm = 1;
    // С помощью цикла умножаем нашу сумму каждый раз на число i
    // Оно каждый раз увеличивается до нашего вводимого числа, пока не станет больше чем наше число
    for (var i = 1; i <= int; i++){
      symm = symm*i;
    }
    //  Выводим в наш блок ответ
    text = $("#otvet").html(symm);
  }
  /*
  Здесь аналогично, только param = СуммаКубов
  */
  else if (param == "СуммаКубов"){
    var iV2 = 0;
    // Здесь тоже самое, тот же цикл, просто формула вычисления другая, простая математика
    for (var i = 1; i <= int; i++){
      if(i%2 == 0){
        iV2 = i*i;
        symm = iV2 + symm;
      }
    //  Выводим в наш блок ответ
    text = $("#otvet").html(symm);

    }
  }
  /*
  Здесь аналогично, только param = КолВоЧетных
  */
  else if (param == "КолВоЧетных"){
    for (var i = 0; i < int.length; i++){
      if(int[i]%2 == 0){
        symm++;
      }
    }
    //  Выводим в наш блок ответ
    text = $("#otvet").html(symm);
  }
  /*
  Здесь аналогично, только param = МаксЦифра
  */
  else if (param == "МаксЦифра"){
    symm = int[0];
    for (var i = 1; i < int.length; i++){
        if (symm < int[i]){
          symm = int[i];
        }
    }
    //  Выводим в наш блок ответ
    text = $("#otvet").html(symm);
  }
  /*
  Здесь аналогично, только param = ПростоеЛиЧисло
  */
  else if (param == "ПростоеЛиЧисло"){

    symm = 'Да';
    for (var i = 2; i < int; i++){
      if (int%i == 0){
        symm = 'Нет';
        break;
      }
    }
    //  Выводим в наш блок ответ
    text = $("#otvet").html(symm);
    if (int == 2){
      //  Если int = 2, то выводим нет в наш блок
      text = $("#otvet").html('Нет');
    }
  }
  /*
  Здесь аналогично, только param = Массив
  */
  else if (param = "Массив"){
    // Здесь идет объявление переменных нужных для массива
    symm = "";
    var symmBig = 0;
    var symmV2 = "";
    var symmSort = "";
    var arraySort = [];
    var symmIntArray = 0;
    var arraymenu = [];

    //Здесь я создаю массив с помощью Math.random(), с диапазоном от 1 - 9
    for (var i = 1; i <= int; i++){
      arraymenu[i] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      symmIntArray=symmIntArray+ arraymenu[i];
      symm=symm+ arraymenu[i];
    }
    symmIntArray = symmIntArray/int;

    //Поиск количества элементов одномерного массива боль-ших, чем среднее арифметическое значение всех элементов массива
    for (var i = 1; i <= int; i++){
      if (arraymenu[i] > symmIntArray){
        symmV2 = symmV2 + arraymenu[i];
      }
    }

    //Функция сортировки, на нее ссылается сортировка ниже - arraymenu.sort(compareNumeric);
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }

    //Сортируем наш массив
    arraySort = arraymenu.sort(compareNumeric);
    for (var i = 0; i < arraySort.length-1; i++){
        symmSort = symmSort + arraySort[i]
    }

    //Поиск максимального числа в массиве
    for (var i = 1; i < symm.length; i++){
        if (symmBig < Number(symm[i])){
          symmBig = Number(symm[i]);
        }
    }
    //Выводим в наш блок вообще все ответы разом, для переноса строки использую <br />, он переносит строку в нужном месте
    text = $("#otvet").html( "- Массив: "+"<br />"+symm+"<br />"+"- Поиск максимального элемента в одномерном массиве: "+"<br />"+symmBig+"<br />"+"- Поиск количества элементов одномерного массива боль-ших, чем среднее арифметическое значение всех элементов массива: "+"<br />" + symmV2+"<br />" + "- Сортировка одномерного массива по возрастанию: "+"<br />" + symmSort );


  }
  else {
    return null;
  }
  return text;
}

// Эти строки не трогать! Этот коммент можете удалить
$( document ).ready(function() {
  /*
  Если тебе все таки интересно, что это, то это navbar с логотипом ПИБУ2018. Почему он написан в коде?
  Для того, чтобы он был одинаковым на все страницах (представьте, что страниц штук 20 и в каждой надо будет писать лого вручную)
  Уж лучше так.
  */
  $('body').prepend(
    "<nav><div class='nav-wrapper'><a href='oneoption.html' class='brand-logo'>"+logo+"</a></div></nav>");
});
