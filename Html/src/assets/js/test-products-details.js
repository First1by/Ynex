let selectedEl;
const colorButtonsBlock = document.querySelector(".color-item-container");
const colorItems = document.querySelectorAll(".color-item");
const closePopupBtn = document.querySelector(".close-popup");
const closePopup = document.querySelector(".main-header-dropdown");

colorButtonsBlock.onclick = (e) => {
  debugger;
  let el = e.target.closest(".color-item");
  if (!el) return;
  highlight(el);
};

function highlight(el) {
  colorItems.forEach((item) => item.classList.remove("color-item_active"));
  selectedEl = el;
  selectedEl.classList.add("color-item_active"); // подсветить новый el
}

closePopupBtn.onclick = () => {
  closePopup.style.transform = "translate(-155.556px, -500px)";
};
