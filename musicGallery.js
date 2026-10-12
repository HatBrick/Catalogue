const isDesktop = window.matchMedia("(hover: hover)").matches;
if (isDesktop) {
  const images = document.querySelectorAll("img");
  const dialog = document.createElement("dialog");
  const img = document.createElement("img");
  const text = document.createElement("p");

  dialog.appendChild(img);
  dialog.appendChild(text);
  document.body.appendChild(dialog);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      img.src = image.src;
      img.style.width = 400px;
      //text = document.querySelector(image "> p");
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", (event) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}
