const isDesktop = window.matchMedia("(hover: hover)").matches;
if (isDesktop) {
  const images = document.querySelectorAll("img");
  const dialog = document.createElement("dialog");
  const img = document.createElement("img");
  
  dialog.appendChild(img);
  document.body.appendChild(dialog);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      image.style.borderImage = "linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1";
      image.style.borderWidth = "4px";
      image.style.borderStyle = "solid";
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
