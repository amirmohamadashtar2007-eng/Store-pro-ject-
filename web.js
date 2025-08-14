const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let current = 0;

function updateSlider() {
  const slideWidth = slides[0].clientWidth + 10;
  slider.style.transform = `translateX(-${slideWidth * current}px)`;
}

next.addEventListener("click", () => {
  current = Math.min(current + 1, slides.length - visibleSlides());
  updateSlider();
});

prev.addEventListener("click", () => {
  current = Math.max(current - 1, 0);
  updateSlider();
});

function visibleSlides() {
  return window.innerWidth <= 480
    ? 1
    : window.innerWidth <= 768
    ? 2
    : window.innerWidth <= 1024
    ? 3
    : 4;
}

window.addEventListener("resize", updateSlider);

setInterval(() => {
  current = (current + 1) % (slides.length - visibleSlides() + 1);
  updateSlider();
}, 4000);

const container = document.querySelector(".card-scroll-container");
const nextBtn = document.querySelector(".scroll-btn.next");
const prevBtn = document.querySelector(".scroll-btn.prev");

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".brands-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const scrollAmount = 200;

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
