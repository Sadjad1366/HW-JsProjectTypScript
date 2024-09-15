document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel") as HTMLDivElement;
  const pages = document.querySelectorAll(".page");
  const nextButton = document.getElementById("nextButton") as HTMLButtonElement;
  const getStartedButton = document.getElementById("getStartedButton") as HTMLButtonElement;
  let currentPage:number = 0;

  nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateCarousel();
    }
    if (currentPage === pages.length - 1) {
      nextButton.style.display = "none";
      getStartedButton.style.display = "block";
    }
  });

  getStartedButton.addEventListener("click", () => {
    window.location.href = "/";
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentPage * 100}%)`;
  }
});
