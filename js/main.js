// Toggle sidebar with menu button on click

var menuButton = document.querySelector("#menu-button");
var sidebar = document.querySelector("#sidebar");

(function() {

  menuButton.addEventListener("click", toggleNav);

  function toggleNav() {
    if(!sidebar.classList.contains("active")) {
      menuButton.classList.toggle("active");
      sidebar.classList.toggle("active");
    }else {
      menuButton.classList.toggle("active");
      sidebar.classList.toggle("active");
    }
  }
})();
