const menu = document.querySelector("#dropdown");
const listItem = document.querySelector("#dropdown ul li");
const buttons = document.querySelector(".button");

// menu.addEventListener("touchend", function (e) {
//   e.preventDefault();
//   const menuItem = document.querySelector("#dropdown > li ul");
//   menuItem.classList.toggle("open");
// });

menu.addEventListener("click", function () {
  const menuItem = document.querySelector("#dropdown > li ul");
  menuItem.classList.toggle("open");
});

listItem.addEventListener("click", function () {
  listItem.classList.toggle("clicked");
});

// buttons.addEventListener("click", function () {
//   buttons.firstChild.
// });
