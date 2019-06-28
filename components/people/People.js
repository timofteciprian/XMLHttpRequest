function loadXMLDoc() {
  var request = new XMLHttpRequest();
  request.responseType = "text";
  request.open("GET", "https://swapi.co/api/people");
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      var html = "";
      $.each(data.results, function(key, element) {
        html +=
          '<li class="list-group-item">' +
          '<button type="button" class="open-homeEvents btn btn-primary" data-id="' +
          "Name: " +
          element.name +
          " " +
          element.height +
          " " +
          element.mass +
          '" data-toggle="modal" data-target=".bd-example-modal-xl" href="#addBookDialog">' +
          element.name +
          "</button>" +
          "</li>";
      });
      $(document).on("click", ".open-homeEvents", function() {
        var eventId = $(this).data("id");
        $("#idHolder").html(eventId);
      });
      $(".container").html(html);
    }
  };
  request.send();
}
