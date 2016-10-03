var html;
var input = $('div.res');
$("div.menu").click(function () {
    var textValue = $("textarea.editor-input").val();
    console.log(textValue);
    html = '<p>'+textValue+'</p>';
    input.empty();
    input.after(textValue);
    console.log(html);
});
function editorSubmit(){
    $("textarea.editor-input").value = $("div.editor-i").val();
}