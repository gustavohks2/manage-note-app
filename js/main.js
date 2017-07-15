// Toggle sidebar with menu button on click

(function() {
  var menuButton = document.querySelector("#menu-button");
  var sidebar = document.querySelector("#sidebar");

  menuButton.addEventListener("click", toggleNav);

  function toggleNav() {
    if(!sidebar.classList.contains("active")) {
      sidebar.classList.toggle("active");
    }else {
      sidebar.classList.toggle("active");
    }
  }
})();
