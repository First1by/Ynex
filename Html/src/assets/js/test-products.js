const filter = document.querySelector(".filter-container");

window.onresize = function () {
  if (window.innerWidth <= 390) {
    // Iphone 12 Pro screen
    filter.classList.add("d-none");
  } else {
    filter.classList.remove("d-none");
  }
};
