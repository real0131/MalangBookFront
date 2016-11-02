function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-img').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
$("document").ready(function(){
    $("#profile-img-change").change(function() {
        readURL(this);
    });
});