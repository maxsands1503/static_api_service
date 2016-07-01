var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/users",
  "method": "GET"
  }


$.ajax(settings).done(function (response) {
  $("#catcher").append("<ul>" + "<h3>All Users<h3>");
  for(var i = 0; i < response.first.length; i++){
    $("#catcher").append("<li>" + response.first[i] + " " + response.last[i] + "</li>")
  }
});
