var apiURL = "http://www.omdbapi.com/"
var apiKeyParameter = "?apikey=592d41aa";
var searchParameter = "&s=";
var movieToSearch = $(".inputSearch").val();


function getMovieInformation(endpoint) {
    // Update movie from input.
    movieToSearch = $(".inputSearch").val();
    console.log(movieToSearch);
    var endpoint = apiURL + apiKeyParameter + searchParameter + movieToSearch;
    $.get(endpoint, function( data ) {
        console.log();
        for(var i = 0; i < data.Search.length; i++) {
            $( ".result-table" )
            .append( "<tr>" + 
            "<td>" + data.Search[i].Title + "</td>" +
            "<td>" + data.Search[i].Year + "</td>" + 
            "<td>" + data.Search[i].imdbID + "</td>" +
            "<td>" + data.Search[i].Type + "</td>" +
            "<td><img src='" + data.Search[i].Poster + "'> </td>" +
            "</tr>"
            );
        }
    }, "json" );
}

$( document ).ready(function() {
    $( ".inputSearch" ).change(getMovieInformation);
});

