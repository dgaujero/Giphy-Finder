$(document).ready(function(){

    var animals = ["dog", "cat", "hamster", "turtle", "hippo", "lion"];

    function renderButtons() {
        $("#buttonDiv").empty();
        animals.forEach(function(element) {
            var a = $("<button>");
            // a.addClass("element");
            // a.attr("data-name", element);
            a.text(element);
            $("#buttonDiv").append(a);
          })
    }
    
    renderButtons();

});