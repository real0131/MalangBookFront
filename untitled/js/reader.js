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