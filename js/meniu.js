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

// Categories Dropdown

btnMenu.addEventListener("click", toggleMenu);
backdrop.addEventListener("click", toggleMenu);

const btn = document.getElementById('menuDropdownBtn');
const list = document.getElementById('menuDropdownList');
const text = document.getElementById('selectedCategory');
const options = list.querySelectorAll('a');


btn.addEventListener('click', () => {
    list.classList.toggle('hidden');
});


options.forEach(option => {
    option.addEventListener('click', () => {
        // 1. Update text to show what they clicked
        text.textContent = option.textContent.trim();
        // 2. Hide list
        list.classList.add('hidden');
    });
});


document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !list.contains(e.target)) {
        list.classList.add('hidden');
    }
});

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