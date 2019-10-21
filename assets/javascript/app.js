$(document).ready(function () {

    var giphyArr = ["comedy", "food", "politics", "entertainment", "animals", "celebrities"];

    function renderButtons() {
        $("#buttonDiv").empty();
        giphyArr.forEach(function (element) {
            var a = $("<button>");
            a.addClass("giphyBTN");
            a.attr("data-name", element);
            a.text(element);
            $("#buttonDiv").append(a);
            $(".giphyBTN").on("click", displayGiphy);
        })
    }
    renderButtons();

    var userInput;
    $("#addGiphy").on("click", function (event) {
        event.preventDefault();
        userInput = $("#userInput").val().trim();
        giphyArr.push(userInput);
        renderButtons();
        
    });

    function displayGiphy(event) {
        var name = event.currentTarget.dataset.name;
        $("#imagesDiv").empty();
        var apiKey = "rcUar7WpIu26baKAaqJuvIu8VV84W97N";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&limit=10&api_key=" + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var giphyImageDiv = $("#imagesDiv");
            console.log(response);
            for (i = 0; i < response.data.length; i++) {
                var imgURL = response.data[i].images["480w_still"].url;
                var animateURL = response.data[i].images.looping.mp4;
                var fixedImage = $("<img>").attr({ "data-state": 'still', "src": imgURL, "class": 'gif', "data-still": imgURL, "data-animate": animateURL });;
                giphyImageDiv.append(fixedImage);
                
                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                    debugger
                });
            }
        });
    };

    // $(".giphyBTN").on("click", displayGiphy);

});
