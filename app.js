const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-container img");
const largeImg = document.querySelector(".large-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", (e) => {
    const largeSrc = e.target.getAttribute("data-original");
    const altAtr = e.target.getAttribute("alt");

    largeImg.src = `${largeSrc}`;
    caption.innerHTML = altAtr;

    modal.classList.add("open");
  });
});

modal.addEventListener("click", (e) => {
  if (
    e.target.classList[1] === "open" ||
    e.target.classList[0] === "large-img"
  ) {
    modal.classList.remove("open");
    largeImg.src = "";
  }
});
