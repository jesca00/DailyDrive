// === Theme Toggle ===
const body = document.body;
const themeToggle = document.createElement("button");
themeToggle.textContent = "Change Theme";
themeToggle.className = "theme-toggle";
themeToggle.style.position = "fixed";
themeToggle.style.top = "10px";
themeToggle.style.right = "10px";
themeToggle.style.zIndex = "1000";
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

// === Accordion for Product Cards ===
document.querySelectorAll('.product-card h3').forEach(header => {
  header.style.cursor = "pointer";
  header.addEventListener("click", () => {
    const para = header.nextElementSibling;
    para.style.display = para.style.display === "none" ? "block" : "none";
  });
});

// === Motivation Generator ===
// === Motivation Generator with Visual Display ===
const motivationSection = document.querySelector('.features-list');

// Create Button
const quoteBtn = document.createElement("button");
quoteBtn.textContent = "Get Motivated 💪";
quoteBtn.className = "quote-button";
motivationSection.appendChild(quoteBtn);

// Create Quote Box
const quoteBox = document.createElement("div");
quoteBox.className = "quote-box";
quoteBox.style.display = "none";
motivationSection.appendChild(quoteBox);

const quotes = [
  "You don’t have to be extreme, just consistent.",
  "Little by little, a little becomes a lot.",
  "Focus on progress, not perfection.",
  "Discipline is choosing between what you want now and what you want most.",
  "Success is the sum of small efforts repeated daily."
];

quoteBtn.addEventListener("click", () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = quote;
  quoteBox.style.display = "block";
});


// === Navigation Scroll Behavior ===
document.querySelectorAll('.navbar-items a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
