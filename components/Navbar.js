function addElement() {
  var new_Nav = document.createElement("NAV");
  new_Nav.setAttribute("class", "nav nav-pills nav-justified");
  document.body.appendChild(new_Nav);

  var home = document.createElement("a");
  var newContent = document.createTextNode("Home");
  home.setAttribute("class", "nav-item nav-link");
  home.setAttribute("href", "../home/Home.html");
  home.appendChild(newContent);
  new_Nav.appendChild(home);

  var films = document.createElement("a");
  var newContent = document.createTextNode("Films");
  films.setAttribute("class", "nav-item nav-link");
  films.setAttribute("href", "../films/Films.html");
  films.appendChild(newContent);
  new_Nav.appendChild(films);

  var people = document.createElement("a");
  var newContent = document.createTextNode("People");
  people.setAttribute("class", "nav-item nav-link");
  people.setAttribute("href", "../people/People.html");
  people.appendChild(newContent);
  new_Nav.appendChild(people);

  var people = document.createElement("a");
  var newContent = document.createTextNode("Planets");
  people.setAttribute("class", "nav-item nav-link");
  //people.setAttribute("href", "people/People.html");
  people.appendChild(newContent);
  new_Nav.appendChild(people);

  var people = document.createElement("a");
  var newContent = document.createTextNode("Species");
  people.setAttribute("class", "nav-item nav-link");
  //people.setAttribute("href", "people/People.html");
  people.appendChild(newContent);
  new_Nav.appendChild(people);

  var people = document.createElement("a");
  var newContent = document.createTextNode("Vehicles");
  people.setAttribute("class", "nav-item nav-link");
  //people.setAttribute("href", "people/People.html");
  people.appendChild(newContent);
  new_Nav.appendChild(people);

  var people = document.createElement("a");
  var newContent = document.createTextNode("Starships");
  people.setAttribute("class", "nav-item nav-link");
  //people.setAttribute("href", "people/People.html");
  people.appendChild(newContent);
  new_Nav.appendChild(people);

  //document.bady.appendChild(new_Nav);
}
