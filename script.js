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

document.querySelectorAll('.product-card h3').forEach(header => {
  header.style.cursor = "pointer";
  header.addEventListener("click", () => {
    const para = header.nextElementSibling;
    para.style.display = para.style.display === "none" ? "block" : "none";
  });
});

const motivationSection = document.querySelector('.features-list');

const quoteBtn = document.createElement("button");
quoteBtn.textContent = "Get Motivated 💪";
quoteBtn.className = "quote-button";
motivationSection.appendChild(quoteBtn);

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

document.querySelectorAll('.navbar-items a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// === Toggle chatbot box ===
const toggle = document.getElementById('chatbotToggle');
const box = document.getElementById('chatbotBox');
toggle.addEventListener('click', () => box.classList.toggle('hidden'));

// === Chat elements ===
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatArea = document.getElementById('chatArea');

// === Load context from file (bonus)
let startupContext = '';
fetch('context.txt')
  .then(response => response.text())
  .then(data => {
    startupContext = data;
  })
  .catch(() => {
    // fallback if fetch fails
    startupContext = `
      [INSERT YOUR STARTUP CONTEXT HERE: story, mission, products, team, etc.]
    `;
  });

// === Function to append message to chat
function appendMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = type === 'user' ? 'user-msg' : 'bot-msg';
  msg.textContent = text;
  chatArea.appendChild(msg);
  chatArea.scrollTop = chatArea.scrollHeight;
}

// === Send user input to Puter.ai ===
function sendChat() {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  chatInput.value = '';

  puter.ai.chat({
    messages: [
      { role: 'system', content: startupContext },
      { role: 'user', content: message }
    ]
  }).then(res => {
    appendMessage(res.message.content, 'bot');
  }).catch(() => {
    appendMessage("Oops! Something went wrong. Try again later.", 'bot');
  });
}

// === Handle send ===
chatSend.addEventListener('click', sendChat);
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendChat();
});

// === Sample Q&A buttons ===
document.querySelectorAll('.sample-q').forEach(btn => {
  btn.addEventListener('click', () => {
    chatInput.value = btn.textContent;
    sendChat();
  });
});