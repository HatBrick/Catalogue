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
      //text = document.querySelector(image "> p");
    });
  });

  dialog.addEventListener("click", (event) => {
    images.forEach((image) => {
      if(image.src != img.src) {
        if(image.style.display == "hidden") {
          image.style.display = "inline";
        } else {
          image.style.display = "hidden";
        }
      }
    }
}
