var hamburgerMenu = document.getElementById("menu-check");
var menuAndClaim = document.getElementById("menu-and-claim");

window.onload = function () {
  document.getElementById("menu-and-claim").style.display = "none";
};

function showMenu() {
  if (hamburgerMenu.checked == true) {
    menuAndClaim.style.display = "block";
  } else {
    menuAndClaim.style.display = "none";
  }
}

function hideMenu() {
  if (hamburgerMenu.checked == true) {
    menuAndClaim.style.display = "none";
  }
}
