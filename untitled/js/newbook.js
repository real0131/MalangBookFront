$(document).ready(function () {
    $("#input-book-color").change(function(){
        var bgColor = $("#input-book-color").val()
        console.log("pyapya");
        $(".book").css({backgroundColor: bgColor,
            transition : "background-color 1.0s ease"});
    });
});