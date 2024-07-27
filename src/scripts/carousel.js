document.addEventListener("DOMContentLoaded", (event) => {
  let slides = document.getElementsByClassName("mySlides");
  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  document.querySelector("#next")?.addEventListener("click", () => {
    showSlides((slideIndex -= -1)); // Decrement slideIndex by 1
  });

  document.querySelector("#prev")?.addEventListener("click", () => {
    showSlides((slideIndex -= 1)); // Decrement slideIndex by 1
  });
});
