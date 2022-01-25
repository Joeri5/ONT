const button = document.getElementById("js--menu");
const nav = document.getElementById("js--nav");
const navclose = document.getElementById("js--nav-close");
const body = document.getElementById("js--body");

button.onclick = function () {
  nav.style.visibility = "visible";
  nav.style.opacity = "1";
  body.style.overflowY = "hidden";
};

navclose.onclick = function () {
  nav.style.visibility = "hidden";
  nav.style.opacity = "0";
  body.style.overflow = "hidden";
};
