$('#login-menu-signup').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $(".login-nav-li")
        .css("background-color","#989898")
        .css("color","white");
    $("#list-4")
        .css("background-color","white")
        .css("color","#535353");
    $("#login-login").css("display","none");
    $("#login-findID").css("display","none");
    $("#login-findPW").css("display","none");
    $("#login-signUP").css("display","inline-block");
    $('.content-wrapper').css({display:'none'});
});
$('#login-menu-findid').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});

    $('.content-wrapper').css({display:'none'});
    $(".login-nav-li")
        .css("background-color","#989898")
        .css("color","white");
    $("#list-2")
        .css("background-color","white")
        .css("color","#535353");
    $("#login-login").css("display","none");
    $("#login-findID").css("display","inline-block");
    $("#login-findPW").css("display","none");
    $("#login-signUP").css("display","none");
});
$('#login-menu-findpw').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $(".login-nav-li")
        .css("background-color","#989898")
        .css("color","white");
    $("#list-3")
        .css("background-color","white")
        .css("color","#535353");
    $("#login-login").css("display","none");
    $("#login-findID").css("display","none");
    $("#login-findPW").css("display","inline-block");
    $("#login-signUP").css("display","none");
    $('.content-wrapper').css({display:'none'});
});
$('.login-nav-cancel').click(function () {
    $('.login-view').css({display:'none', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $('.content-wrapper').css({display:'block'});
});
$('#nav-li-last').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $(".login-nav-li")
        .css("background-color","#989898")
        .css("color","white");
    $("#list-1")
        .css("background-color","white")
        .css("color","#535353");
    $("#login-login").css("display","inline-block");
    $("#login-findID").css("display","none");
    $("#login-findPW").css("display","none");
    $("#login-signUP").css("display","none");
    $('.content-wrapper').css({display:'none'});
});
$(".side-write").click(function () {
    location.replace('/newbook');
    //TODO: 링크넣으셈
});
var onBookImgError = function () {
    var num = Math.floor((Math.random() * 5) + 1);
    switch (num){
        case 1:
            return 'image/default_bookcover.png';
        case 2:
            return 'image/default_bookcover_1.png';
        case 3:
            return 'image/default_bookcover_blue.png';
        case 4:
            return 'image/default_bookcover_green.png';
        case 5:
            return 'image/default_bookcover_red.png';
    }
};