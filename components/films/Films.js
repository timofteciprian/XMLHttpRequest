function retriveData(url, callback) {
  var request = new XMLHttpRequest();
  request.responseType = "text";
  request.open("GET", url);
  request.onload = function() {
    var data = JSON.parse(this.response);
    callback(data);
  };
  request.send();
}

function loadXMLDoc() {
  var url = "https://swapi.co/api/films";
  retriveData(url, function(data) {
    data.results.map((element, index) => {
      var div = document.createElement("div");
      div.setAttribute("class", "accordin");
      div.setAttribute("id", "accordionExample");

      var div1 = document.createElement("div");
      div1.setAttribute("class", "card");
      div.appendChild(div1);

      var div2 = document.createElement("div");
      div2.setAttribute("class", "card-header");
      div2.setAttribute("id", "headingOne");
      div1.appendChild(div2);

      var h2 = document.createElement("h2");
      h2.setAttribute("class", "mb-0");
      div2.appendChild(h2);

      var btn = document.createElement("Button");
      btn.setAttribute("class", "btn btn-link");
      btn.setAttribute("type", "button");
      btn.setAttribute("data-toggle", "collapse");
      btn.setAttribute("data-target", "#collapseOne");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-controls", "collapseOne");
      btn.innerHTML = element.title;
      h2.appendChild(btn);

      var div3 = document.createElement("div");
      div3.setAttribute("class", "collapse show");
      div3.setAttribute("id", "collapseOne");
      div3.setAttribute("aria-labelledby", "headingOne");
      div3.setAttribute("data-parent", "#accordionExample");
      div1.appendChild(div3);

      var div4 = document.createElement("div");
      div4.setAttribute("class", "card-body");
      div3.appendChild(div4);

      var title = document.createElement("p");
      title.innerHTML = element.title;
      div4.appendChild(title);

      var opening_crawl = document.createElement("p");
      opening_crawl.innerHTML = element.opening_crawl;
      div4.appendChild(opening_crawl);

      document.getElementById("container").appendChild(div);
    });
  });
}
