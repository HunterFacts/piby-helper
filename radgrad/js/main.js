$(document).ready(function(){
  $('.tooltipped').tooltip();
});

function radianToGradus(){
  let radian = $('#radian').val(),
  pi = Math.PI;

  let gradus = radian * (180 / pi);
  $('#gradus').val(gradus== 0 ? "" :(gradus).toFixed(3));
  changeFormula(radian, gradus);
  M.updateTextFields();
}

function gradusToRadian(){
  let gradus = $('#gradus').val(),
  pi = Math.PI;

  let radian= gradus / (180 / pi);
  $('#radian').val(radian == 0 ? "" : radian);
  changeFormula(radian, gradus);
  M.updateTextFields();
}

function changeFormula(radian, gradus) {
  $('.rad').text(radian);
  $('.grad').text(gradus);
}

function radgradChangePosition(){
  let con1 = $('.container1').html(),
  con2 = $('.container2').html(),
  gradus = $('#gradus').val(),
  radian = $('#radian').val();

  $('.container1').html(con2);
  $('.container2').html(con1);
  $('#gradus').val(gradus);
  $('#radian').val(radian);
  M.updateTextFields();
}