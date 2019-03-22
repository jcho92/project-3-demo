var categoryList = ['test', 'rick and morty'];



        function gifDisplay() {
            var data = $(this).attr("data-category");
            console.log(data)
            var QueryURL = "http://api.giphy.com/v1/gifs/search?q=" + data + "&api_key=sEePOFOcGEeXMEC6uZsruN7hUxBnFcdh";
            // generates the igfs based on the url 
            $.ajax({
                url: QueryURL,
                method: "GET"
            }).then(function (response) {
                for (var i = 0; i < 3; i++) {

                    console.log(response);
                    console.log(response.data[i].url);
                    var gifImg = $("<img>");
                    gifImg.attr("src", response.data[i].images.downsized.url);
                    gifImg.attr("data-still", response.data[i].images.downsized_still.url);
                    gifImg.attr("class", "gifImage")
                    gifImg.attr("data-state", "move")
                    gifImg.attr("data-move", response.data[i].images.downsized.url)
                    var gifRate = $("<p>");
                    gifRate.html("rating= " + response.data[i].rating);
                    gifRate.append(gifImg);
                    $("#gifDiv").prepend(gifRate);
                }

            })
        };
        // runs through the array and build the new buttons depending on what is in the categoryList
        function build() {
            for (i = 0; i < categoryList.length; i++) {
                var catButton = $("<button>");
                catButton.attr("data-category", categoryList[i]);
                catButton.html(categoryList[i]);
                catButton.addClass("category-button")
                $("#button-list").append(catButton);
            }
        };
        // text box that creates a new button depending on what is in the array
        $("#addCategory").on("click", function (event) {
            event.preventDefault();
            if ($("#categoryInput").val().length === 0 ) {
                alert("field is empty");
            }
            else {
                var newCategory = $("#categoryInput").val();
                categoryList.push(newCategory)
                console.log(newCategory);
                console.log(categoryList);
                $("#button-list").empty();
                $("#categoryInput").val("");
                build();
            }

        });
        // on click function to create state changes
        function stateChange() {
            var state = $(this).attr("data-state");
            console.log(state);
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-move"));
                $(this).attr("data-state", "move");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        };
        function clearAll(){
            $("#gifDiv").empty();
        }

        $(document).on("click", ".gifImage", stateChange);
        $(document).on("click", ".category-button", gifDisplay);
        build();

