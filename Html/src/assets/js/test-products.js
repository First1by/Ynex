const filter = document.querySelector(".filter-container");
const sidebarFilter = document.querySelector(".icon-filter-sidebar");
const iconClose = document.querySelector(".icon-close");

window.onresize = function () {
  if (window.innerWidth <= 576) {
    // Iphone 12 Pro screen
    filter.classList.add("position-absolute");
  } else {
    filter.classList.remove("position-absolute");
  }
};

sidebarFilter.onclick = () => {
  filter.classList.toggle("filter-container_active");
};

iconClose.onclick = () => {
  filter.classList.toggle("filter-container_active");
};

document.onclick = (e) => {
  if (
    !e.target.closest(".filter-container") &&
    !e.target.closest(".icon-filter-sidebar")
  ) {
    filter.classList.remove("filter-container_active");
  }
};
