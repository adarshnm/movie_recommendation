
function search() {
    $("#list").html("");
    let name = $("#movie").val();
    console.log(name)
    url = "http://www.omdbapi.com/?s=" + name + "&apikey=75b02c65";
    $.getJSON(url, function (data) {
        console.log(data["Search"]);
        show_list(data["Search"]);

    });

}

function show_list(result) {
    result.forEach(element => {
        $("#list").append("<li>" + element["Title"] + "</li>");
    });

}