const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;

    cards.forEach(card => {
      card.classList.toggle("hidden", value !== "all" && card.dataset.category !== value);
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxType = document.getElementById("lightboxType");
const closeLightbox = document.getElementById("lightboxClose");

document.querySelectorAll(".image-button").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const img = button.querySelector("img");
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxTitle.textContent = card.dataset.title;
    lightboxType.textContent = card.dataset.type;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeBox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
closeLightbox.addEventListener("click", closeBox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeBox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeBox();
});
