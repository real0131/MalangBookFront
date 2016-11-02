$(document).ready(function () {
    $("#input-book-color").change(function(){
        var bgColor = $("#input-book-color").val()
        console.log("pyapya");
        $(".book").css({backgroundColor: bgColor,
            transition : "background-color 1.0s ease"});
    });
});
$(document).ready(function(){
    $("#input-book-image").change(function() {
        readURL(this);
    });
});
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.book').css('background-image','url('+e.target.result+')');
        };

        reader.readAsDataURL(input.files[0]);
    }
}