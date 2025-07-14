// Reveal Elements on Scroll
const animatedElements = document.querySelectorAll(".animate");

function handleScroll() {
  const triggerPoint = window.innerHeight - 100;

  animatedElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Dark Mode Toggle 🌜/☀️
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

// Typewriter Effect for About Section
const aboutText = `I'm a Software Engineering student with a creative passion for visual design and user interfaces. I combine my Graphic Design skills and Front-End expertise to build responsive, animated, and user-friendly web applications. From structured HTML to styled components and digital artwork, I believe in blending logic with beauty.`;

const typingElement = document.getElementById("typing-text");

let index = 0;
function typeWriter() {
  if (index < aboutText.length) {
    typingElement.innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 25); // typing speed
  }
}

window.addEventListener("load", () => {
  setTimeout(typeWriter, 500); // slight delay after page load
});
 