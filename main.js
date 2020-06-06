const slideImages = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let currentSlideNum = 0;
init();

function init() {
  slideImages.forEach((image, i) => {
    image.style.left = `${i * image.clientWidth}px`;
  });
  slideImages[0].classList.add("active");

  createNavDots();
  setInterval(() => nextBtn.click(), 5000); //slide automation
}

nextBtn.addEventListener("click", () => {
  currentSlideNum++;
  if (currentSlideNum > slideImages.length - 1) {
    currentSlideNum = 0;
  }
  changeSlide(currentSlideNum);
});

prevBtn.addEventListener("click", () => {
  currentSlideNum--;
  if (currentSlideNum < 0) {
    currentSlideNum = slideImages.length - 1;
  }
  changeSlide(currentSlideNum);
});

function changeSlide(slideNumber) {
  slidesContainer.style.transform = `translateX(-${
    slidesContainer.clientWidth * slideNumber
  }px)`;
  setActiveClasses();
}

function setActiveClasses() {
  let currentActiveImg = document.querySelector(".slide-image.active");
  currentActiveImg.classList.remove("active");
  slideImages[currentSlideNum].classList.add("active");

  let currentActiveDot = document.querySelector(".single-dot.active");
  currentActiveDot.classList.remove("active");
  navigationDots.children[currentSlideNum].classList.add("active");
}

function createNavDots() {
  for (let i = 0; i < slideImages.length; i++) {
    const singleDot = document.createElement("div");
    singleDot.classList.add("single-dot");
    navigationDots.appendChild(singleDot);

    singleDot.addEventListener("click", () => {
      currentSlideNum = i;
      changeSlide(currentSlideNum);
    });
  }
  navigationDots.children[0].classList.add("active");
}
