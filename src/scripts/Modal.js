const overlay = document.querySelector(".overlay");
const image = document.querySelectorAll(".photo-grid__img");
const modal = document.querySelector(".modal");

function closeModal() {
  overlay.style.display = "none";
}

const closeModalButton = document
  .querySelector(".closeModalBtn")
  .addEventListener("click", closeModal);

image.forEach((img) => {
  img.addEventListener("click", (e) => {
    overlay.style.display = "block";

    // Clear any previous image in the modal
    modal.innerHTML = "";

    // Clone the image and append it to the modal
    const clonedImage = e.target.cloneNode();
    modal.appendChild(clonedImage);
  });
});

// Add event listener to overlay to close modal if clicked outside modal or image
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});
