//JS STATIC
const navButton = document.querySelector("#open");
navButton.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visibility");
  if (visibility === "false") {
    nav.setAttribute("data-visibility", "true");
  } else {
    nav.setAttribute("data-visibility", "false");
  }
});
