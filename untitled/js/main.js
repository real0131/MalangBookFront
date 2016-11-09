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
    $("#list-3")
        .css("background-color","white")
        .css("color","#535353");
    $("#login-login").css("display","inline-block");
    $("#login-findID").css("display","none");
    $("#login-findPW").css("display","none");
    $("#login-signUP").css("display","none");
    $('.content-wrapper').css({display:'none'});
});