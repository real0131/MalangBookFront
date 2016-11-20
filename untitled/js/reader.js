$(document).ready(function () {
   $('#reply-textarea').on('keyup',function () {
      if($(this).val().length > 200){
         $(this).val($(this).val().substring(0,200));
      }
      $('#reply-textare-length').text($('#reply-textarea').val().length+"/200");
   });
   $('#reply-textarea').keyup(function(e){
      if(e.keyCode == 8) {
         $('#reply-textare-length').text($('#reply-textarea').val().length+"/200");
      }
   });
});
function readURL(input) {

   if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          console.log('d');
          $('.page-img-wrap').css({'background-image' : e.target.result , 'shape-outside': e.target.result});
      };

      reader.readAsDataURL(input.files[0]);
   }
}
$("document").ready(function(){
   $("#page-img-change").change(function() {
       console.log('asdf');
      readURL(this);
   });
});