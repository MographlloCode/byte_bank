function showMenu() {
  var hamburgerMenu = document.getElementById("menu-check");
  var menuAndClaim = document.getElementById("menu-and-claim");

  if (hamburgerMenu.checked == true) {
    menuAndClaim.style.display = "block";
  } else {
    menuAndClaim.style.display = "none";
  }
}
