var categoryList = ['south Park', 'rick and morty'];



function gifDisplay() {
    var data = $(this).attr("data-category");
    console.log(data)
    var QueryURL = "https://api.giphy.com/v1/gifs/search?q=" + data + "&api_key=sEePOFOcGEeXMEC6uZsruN7hUxBnFcdh";
    // generates the igfs based on the url 
    $.ajax({
        url: QueryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 4; i++) {
            //creates a table
            console.log(response);
            console.log(response.data[i].url);

            // creates the tr in my table
            var gifTableTR = $("<tr>");
            gifTableTR.attr("ID", "Tr-" + response.data[i].id)
            $('#gifTable').prepend(gifTableTR);
            //creates the td in my table
            var gifTableTD = $("<td>");
            var gifRatingTD = $("<td>")
            var gifFav = $("<td>")
            gifFav.attr("ID", "favId" + response.data[i].id)
            gifFav.attr("class", "Fav")
            gifTableTD.attr("class", "imgTD")
            gifRatingTD.attr("class", "ratingTD");
            gifTableTD.attr("ID", "imgTd-" + response.data[i].id)
            gifRatingTD.attr("ID", "ratingTd-" + response.data[i].id)

            $('#Tr-' + response.data[i].id).append(gifTableTD);
            $('#Tr-' + response.data[i].id).append(gifRatingTD);
            $('#Tr-' + response.data[i].id).append(gifFav)
        

            //creates the img
            var favbutton = $('<button>');
            favbutton.attr("id", "favid-" + response.data[i].id);
            favbutton.attr("data-id", response.data[i].id);
            favbutton.addClass("favouriteGif")
            favbutton.html("favourite");
            var gifImg = $("<img>");
            gifImg.attr("src", response.data[i].images.downsized.url);
            gifImg.attr("data-still", response.data[i].images.downsized_still.url);
            gifImg.attr("class", "gifImage")
            gifImg.attr("data-state", "move")
            gifImg.attr("data-move", response.data[i].images.downsized.url)
            var gifRate = $("<p>");

            gifRate.html("rating: " + response.data[i].rating);
            $('#imgTd-' + response.data[i].id).append(gifImg);
            $('#ratingTd-' + response.data[i].id).append(gifRate);
            $('#favId' + response.data[i].id).append(favbutton)

        }

    })
};
function favouriteButton() {
    var id = $(this).data("id");
    console.log(id)
    $("#Tr-"+id).remove();
    // recreates the table in the favourite section
    var favgifTableTR = $("<tr>");
    favgifTableTR.attr("ID", "favTr-" + id)
    $('#favTable').append(favgifTableTR);
    var favgifTableTD = $("<td>");
    // var favgifRatingTD = $("<td>")
    favgifTableTD.attr("class", "imgTD")
    // favgifRatingTD.attr("class", "ratingTD");
    favgifTableTD.attr("ID", "favimgTd-" + id)
    // favgifRatingTD.attr("ID", "favratingTd-" + id)
    $('#favTr-' + id).append(favgifTableTD);
    // $('#favTr-' + id).append(favgifRatingTD);
    //creates the images in the favourite section
    
    var favgifImg = $("<img>");
    favgifImg.attr("src", "https://media3.giphy.com/media/"+id+"/giphy-downsized.gif" );
    favgifImg.attr("class", "gifImage");
    favgifImg.attr("data-still" ,"https://media3.giphy.com/media/" + id +"/giphy-downsized_s.gif");
    favgifImg.attr("data-move" ,"https://media3.giphy.com/media/"+ id + "/giphy-downsized.gif");
    favgifImg.attr("data-state", "move"  );

    // var favgifRate = $("<p>");

    // favgifRate.html("rating= " + response.data[i].rating);
    $('#favimgTd-' + id).append(favgifImg);
    // $('#favratingTd-' + id).append(favgifRate);
    


}
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
    if ($("#categoryInput").val().length === 0) {
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
function clearAll() {
    $("#gifTable").empty();
}

$(document).on("click", ".favouriteGif", favouriteButton);
$(document).on("click", ".category-button", gifDisplay);
$(document).on("click", ".gifImage", stateChange);
build();

