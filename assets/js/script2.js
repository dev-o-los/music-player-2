/* Hides the body scrollbar when the overlay menu is opened */

const body = document.body;

const hamburgerToggler = document.querySelector(".toggler");

hamburgerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});
