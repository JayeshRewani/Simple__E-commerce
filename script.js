const BarIcon = document.getElementById("bar");
const navBar = document.getElementById("navbar");

if (BarIcon) {
  BarIcon.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}

const CloseBar = document.getElementById("close-btn");

if (CloseBar) {
  CloseBar.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}

// shop page hero-img slider
const slide = document.querySelectorAll(".slide");
let counter = 0;

console.log(slide);

slide.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});
const goNext = () => {
  if (counter < slide.length - 1) {
    counter++;
    setTimeout(SlideImg(), 100);
  }
};
const goPrev = () => {
  if (counter != 0) {
    counter--;
    setTimeout(SlideImg(), 100);
  }
};
const SlideImg = () => {
  slide.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`;
  });
};


