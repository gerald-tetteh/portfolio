const nav = document.querySelector(".nav-wrapper");

$(document).ready(() => {
  $(".sidenav").sidenav();
  $('.materialboxed').materialbox();
  $(".parallax").parallax();
  $('.collapsible').collapsible();
  $('.tabs').tabs();
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    nav.classList.add("dark");
    nav.classList.remove("transparent");
  }
  if (window.pageYOffset === 0) {
    nav.classList.remove("dark");
    nav.classList.add("transparent")
  }
});