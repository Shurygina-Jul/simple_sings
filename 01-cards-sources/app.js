function slidesPlagin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      clearActiveClass();
      slide.classList.add("active");
    });
  });

  function clearActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlagin();
