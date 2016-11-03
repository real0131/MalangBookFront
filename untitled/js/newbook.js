var novelOption = ["<option value='sf'>SF</option>","<option value='mystery'>미스터리</option>"
    ,"<option value='fantasy'>판타지</option>","<option value='serious'>시리어스</option>","<option value='comic'>코믹</option>"
    ,"<option value='romance'>로맨스</option>"];
var taleOption = ["<option value='east'>동양권</option>","<option value='west'>서양권</option>","<option value='korean'>한국 전래</option>"
    ,"<option value='made'>자작</option>"];
var poemOption = ["<option value='freepoem'>자유 시</option>","<option value='staticpoem'>정형 시</option>","<option value='sanmoonpoem'>산문 시</option>"
    ,"<option value='seojungpoem'>서정 시</option>","<option value='seosapoem'>서사 시</option>","<option value='gukpoem'>극 시</option>"];

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
$(document).ready(function()
{
    $('#category').change(function(){
        $("#category-sub").find("option").remove();
        console.log($("#category option:selected").val());
        if($("#category option:selected").val()=='novel') {
            $("#category-sub").append("<option value='sf'>SF</option>")
                .append("<option value='mystery'>미스터리</option>")
                .append("<option value='fantasy'>판타지</option>")
                .append("<option value='serious'>시리어스</option>")
                .append("<option value='comic'>코믹</option>")
                .append("<option value='romance'>로맨스</option>");
        } else if($("#category option:selected").val()=='fairytale'){
            $("#category-sub").append("<option value='east'>동양권</option>")
                .append("<option value='west'>서양권</option>")
                .append("<option value='korean'>한국 전래</option>")
                .append("<option value='made'>자작</option>");
        } else if($("#category option:selected").val()=='poem'){
            $("#category-sub").append("<option value='freepoem'>자유 시</option>")
                .append("<option value='staticpoem'>정형 시</option>")
                .append("<option value='sanmoonpoem'>산문 시</option>")
                .append("<option value='seojungpoem'>서정 시</option>")
                .append("<option value='seosapoem'>서사 시</option>")
                .append("<option value='gukpoem'>극 시</option>");
        }
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
