var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/active_users",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "01f920ac-0ef1-54e8-fffb-2b21c32465cf"
  }
}



$.ajax(settings).done(function (response) {
  console.log(response);
  $("#catcher").append("<ul>" + "<h3>All Users<h3>");
  for(var i = 0; i < response.active.length; i++){
    $("#catcher").append("<li>" + response.active[i] + "</li>")
  }
});
