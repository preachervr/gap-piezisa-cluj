// Active States Logic
const links = document.querySelectorAll(".navLinks a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  const linkAttribute = link.getAttribute("href");

  if (linkAttribute === currentPage) {
    link.classList.add("text-crimsonglow-500");
    link.classList.add("before:w-full");
    
  } else {
    link.classList.remove("text-crimsonglow-500");
    link.classList.remove("before:w-full");
  }
});

// Mobile Menu

const btnMenu = document.getElementById("btnMenu");
const menuContainer = document.getElementById("mobileMenu");
const backdrop = document.getElementById("menuBackDrop");
const sheet = document.getElementById("menuSheet");

function toggleMenu() {
  const isClosed = sheet.classList.contains("translate-y-full");
  
  if (isClosed) {
    menuContainer.classList.remove("invisible", "pointer-events-none");

    backdrop.classList.remove("bg-charcoaldepths-950/0");
    backdrop.classList.add("bg-charcoaldepths-950/80");

    backdrop.classList.remove("backdrop-blur-none");
    backdrop.classList.add("backdrop-blur-[2px]")

    setTimeout(() => {
      sheet.classList.remove("translate-y-full");
    }, 10);
  } else {
    sheet.classList.add("translate-y-full");

    backdrop.classList.remove("bg-charcoaldepths-950/80");
    backdrop.classList.add("bg-charcoaldepths-950/0");

    backdrop.classList.remove("backdrop-blur-[2px]");
    backdrop.classList.add("backdrop-blur-none")

    setTimeout(() => {
      menuContainer.classList.add("invisible", "pointer-events-none");
    }, 300);
  }
}

btnMenu.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", toggleMenu);

// Stats Section

const statsSection = document.getElementById("statsSection");
const counters = document.querySelectorAll(".counter");
let hasStarted = false;

const startCounting = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;;
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasStarted) {
      startCounting();
      hasStarted = true;
  }
});
}, { threshold: 0.5 });

if (statsSection) {
  observer.observe(statsSection);
}

// Back to Top

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
  }
});

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

backToTopBtn.addEventListener("click", backToTop);

// Current Year

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();