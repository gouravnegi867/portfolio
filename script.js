const roles = [
  "Data Analyst",
  "MIS & Reporting",
  "Software Development",
  "IT Operations"
];

const roleElement = document.getElementById("role-text");
const rolePill = document.querySelector(".role-pill");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  if (!roleElement) return;
  const current = roles[roleIndex];

  if (!isDeleting) {
    roleElement.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      if (rolePill) {
        rolePill.classList.add("glow-pulse");
        setTimeout(() => rolePill.classList.remove("glow-pulse"), 450);
      }
      setTimeout(typeRole, 900);
      return;
    }
  } else {
    roleElement.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, isDeleting ? 28 : 52);
}

typeRole();

const navButtons = document.querySelectorAll("[data-page]");
const pageViews = document.querySelectorAll(".page-view");

function switchPage(targetId) {
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === targetId);
  });

  pageViews.forEach((section) => {
    if (targetId === "all") {
      section.classList.add("active-view");
    } else {
      section.classList.toggle("active-view", section.id === targetId);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage(btn.dataset.page);
  });
});

const copyBtn = document.getElementById("copy-email-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("gouravnegi867@gmail.com").then(() => {
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copied";
      setTimeout(() => {
        copyBtn.textContent = original;
      }, 1500);
    });
  });
}

// Auto-update footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

switchPage("overview");