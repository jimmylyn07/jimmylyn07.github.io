document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. MOBILE SIDEBAR NAVIGATION TOGGLE
  // ==========================================
  const menuBtn = document.getElementById("menu-btn");
  const sidebarMenu = document.getElementById("sidebar-menu");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  function toggleMenu() {
    if (sidebarMenu && sidebarOverlay) {
      sidebarMenu.classList.toggle("translate-x-full");
      sidebarOverlay.classList.toggle("opacity-0");
      sidebarOverlay.classList.toggle("pointer-events-none");
    }
  }

  if (menuBtn && sidebarMenu && sidebarOverlay) {
    menuBtn.addEventListener("click", toggleMenu);
    sidebarOverlay.addEventListener("click", toggleMenu);
    sidebarLinks.forEach(link => {
      link.addEventListener("click", toggleMenu);
    });
  }

  // ==========================================
  // 2. TYPED.JS INITIALIZATION
  // ==========================================
  const typedElement = document.getElementById('typed');
  if (typedElement) {
    new Typed('#typed', {
      strings: [
        "a WordPress Developer.", 
        "an Elementor Expert.",
        "a Frontend Developer.", 
        "a Graphic Designer."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ==========================================
  // 3. SCROLL REVEAL OBSERVER
  // ==========================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("section > div").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});

// ==========================================
// 4. INFINITE SKILLS TICKER (window.onload)
// ==========================================
window.addEventListener('load', () => {
  const track = document.getElementById('skills-track');
  
  if (track) {
    const trackContent = track.innerHTML;
    track.innerHTML = trackContent + trackContent + trackContent;

    let scrollPosition = 0;
    const speed = 0.5; 

    function animate() {
      scrollPosition -= speed;
      const resetPoint = track.scrollWidth / 3;

      if (Math.abs(scrollPosition) >= resetPoint) {
        scrollPosition = 0;
      }

      track.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }
});

// ==========================================
// 5. PROJECT FILTER FUNCTIONS (Safe if elements are missing)
// ==========================================
function scrollGrid(distance) {
  const container = document.getElementById('scroll-container');
  if (container) {
    container.scrollBy({ left: distance, behavior: 'smooth' });
  }
}

function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const container = document.getElementById('scroll-container');
  
  if (container) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('bg-indigo-500', 'text-white');
    btn.classList.add('bg-gray-800', 'text-gray-300');
  });
  
  if (event && event.target) {
    event.target.classList.add('bg-indigo-500', 'text-white');
  }
}