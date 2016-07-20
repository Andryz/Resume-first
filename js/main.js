
$(window).scroll(function() {
var header = $('.header');
if ($(this).scrollTop() > header.height()){
$('.nav').addClass("sticky");
}
else{
$('.nav').removeClass("sticky");
}
});
// Показывает и скрывает меню
$('.menu').on('click', function(e){
$('.dropdown-inside').slideToggle();
});

$('.hide').on('click', function(e){
$('.dropdown-inside').slideToggle();
});

// Плавный скролл по якорям
$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 1500);
return false;
});
});






