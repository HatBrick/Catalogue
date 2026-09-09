const isDesktop = window.matchMedia("(hover: hover)").matches;
if (isDesktop) {
  const images = document.querySelectorAll("img");
  const dialog = document.createElement("dialog");
  const img = document.createElement("img");
  const close = document.createElement("button");

  close.textContent = "click here to close or hit 'esc'";
  close.addEventListener("click", () => dialog.close());

  dialog.appendChild(img);
  dialog.appendChild(close);
  document.body.appendChild(dialog);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      img.src = image.src;
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
