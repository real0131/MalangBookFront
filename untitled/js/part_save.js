$("#btn-finish").click(function () {
    console.log("btn-finish onclick");
    $("#library-pending").css('display','none');
    $("#library-finish").css('display','block');
});
$("#btn-pending").click(function () {
    console.log("btn-finish onclick");
    $("#library-finish").css('display','none');
    $("#library-pending").css('display','block');
});