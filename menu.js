var menuOffset = $('nav ul .menu__list').position().left;
var menuItemWidth = $('nav ul .menu__list').width();

$('document').ready(function() {
    $('.menu__pag').css('left', menuOffset + menuItemWidth / 2);
    var bgColor = $('.menu__list a').css("background-color");
    $('.menu__pag').css('bacground-color', bgColor);
});

$('nav').mouseout(function(){
    $('.menu__pag').css('left', menuOffset + menuItemWidth / 2);
    var bgColor = $('menu__list__item a').css("background-color");
    $('.menu__pag').css('background-color', bgColor);
});

$('nav ul li').hover(function(){
    var navOffset = $(this).position().left;
    var navItemWidth = $(this).width();

    $('.menu__pag').css('left', navOffset + navItemWidth / 2);

    var bgColor = $('a', this).css("background-color");

    $('.menu__pag').css('background-color', bgColor);
});