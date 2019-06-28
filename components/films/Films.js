function retriveData(url, callback) {
  var request = new XMLHttpRequest();
  request.responseType = "text";
  request.open("GET", url);
  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    callback(data);
  };
  request.send();
}

// function displayData() {
//   url = "https://swapi.co/api/films";
//   data = returnData(url);
// }

function loadXMLDoc() {
  det = retriveData();
  console.log(det);
  var request = new XMLHttpRequest();
  request.responseType = "text";
  request.open("GET", "https://swapi.co/api/films");
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.results.map((element, index) => {
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");

        var anchorElmnt = document.createElement("Button");
        anchorElmnt.setAttribute("type", "button");
        anchorElmnt.setAttribute("class", "btn btn-primary");
        anchorElmnt.setAttribute("data-toggle", "modal");
        anchorElmnt.setAttribute("data-target", ".bd-example-modal-lg");
        anchorElmnt.innerHTML = element.title;
        li.appendChild(anchorElmnt);
        document.getElementById("container").appendChild(li);

        var title = document.createElement("p");
        title.setAttribute("class", "title");
        title.innerHTML = element.title;
        document.getElementById("title").appendChild(title);

        document.getElementById("episode_id").innerHTML = element.episode_id;
        document.getElementById("opening_crawl").innerHTML =
          element.opening_crawl;
        document.getElementById("director").innerHTML = element.director;
        document.getElementById("producer").innerHTML = element.producer;
        document.getElementById("release_date").innerHTML =
          element.release_date;
        document.getElementById("characters").innerHTML = element.characters;
      });

      // $(document).on("click", ".open-homeEvents", function() {
      //   var eventId = $(this).data("id");
      //   $("#idHolder").html(eventId);
      // });
      // $(".container").html(html);
    }
  };
  request.send();
}

// function loadXMLDoc() {
//   var request = new XMLHttpRequest();
//   request.responseType = "text";
//   request.open("GET", "https://swapi.co/api/films");
//   request.onload = function() {
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//       var html = "";
//       $.each(data.results, function(key, element) {
//         html +=
//           '<li class="list-group-item">' +
//           '<button type="button" class="open-homeEvents btn btn-primary" data-id="' +
//           "Film: " +
//           element.title +
//           " " +
//           element.episode_id +
//           " " +
//           element.opening_crawl +
//           '" data-toggle="modal" data-target=".bd-example-modal-xl" href="#addBookDialog">' +
//           element.title +
//           "</button>" +
//           "</li>";
//       });

//       $(document).on("click", ".open-homeEvents", function() {
//         var eventId = $(this).data("id");
//         $("#idHolder").html(eventId);
//       });
//       $(".container").html(html);
//     }
//   };
//   request.send();
// }

// function loadXMLDoc() {
//   var request = new XMLHttpRequest();
//   request.responseType = "text";
//   request.open("GET", "https://swapi.co/api/films/1");
//   request.onload = function() {
//     var data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//       document.getElementById("container").innerHTML = data.title;
//       document.getElementById("episode_id").innerHTML = data.episode_id;
//       document.getElementById("opening_crawl").innerHTML = data.opening_crawl;
//       document.getElementById("director").innerHTML = data.director;
//       document.getElementById("producer").innerHTML = data.producer;
//       document.getElementById("release_date").innerHTML = data.release_date;
//       document.getElementById("characters").innerHTML = data.characters;
//     }
//   };
//   request.send();
// }
