function navbarToggle() {
  if (navbar.className === "navbar" || navbar.className === "navbarScroll") {
    navbar.className = "toggle";
  }
   else {
    navbar.className = "navbarScroll";
  }
}
