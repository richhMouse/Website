const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".faq button").forEach(btn => {
btn.addEventListener("click", () => {
const p = btn.nextElementSibling;
p.style.display = p.style.display === "block" ? "none" : "block";
});
});

document.getElementById("bookingForm").addEventListener("submit", e => {
e.preventDefault();

const name = document.getElementById("name").value;
const guests = document.getElementById("guests").value;
const room = document.getElementById("room").value;

const msg =
`Hello, I want to book a room.
Name: ${name}
Guests: ${guests}
Room: ${room}`;

window.open(
`https://wa.me/918650990408?text=${encodeURIComponent(msg)}`,
"_blank"
);
});
// Gallery slider
const track = document.querySelector(".gallery-track");
const cards = document.querySelectorAll(".gallery-card");

let galleryIndex = 0;

setInterval(() => {
  const cardWidth = cards[0].offsetWidth + 20;
  galleryIndex++;

  if (galleryIndex > cards.length - 1) {
    galleryIndex = 0;
  }

  track.style.transform = `translateX(-${galleryIndex * cardWidth}px)`;
}, 3000);