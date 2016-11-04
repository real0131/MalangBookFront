$('#login-menu-signup').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $('.content-wrapper').css({display:'none'});
});
$('#login-menu-findid').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $('.content-wrapper').css({display:'none'});
});
$('#login-menu-findpw').click(function () {
    $('.login-view').css({display:'block', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $('.content-wrapper').css({display:'none'});
});
$('.login-nav-cancel').click(function () {
    $('.login-view').css({display:'none', position : 'fixed',top:'0',left:'0',transition : "background-color 0.5s ease"});
    $('.content-wrapper').css({display:'block'});
});