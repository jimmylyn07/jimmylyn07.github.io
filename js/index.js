document.addEventListener("DOMContentLoaded", () => {
 // --- Typed.js Animation ---
      const typedElement = document.getElementById('typed');
      if (typedElement && !typedElement.classList.contains('typed-initialized')) {
          typedElement.classList.add('typed-initialized');
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

      // --- Mobile Sidebar Menu ---
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
      
  });

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
};

// ==========================================
// 4. INFINITE SKILLS TICKER
// ==========================================
window.addEventListener('load', () => {
  const track = document.getElementById('skills-track');
  
  if (track && !track.classList.contains('cloned')) {
    track.classList.add('cloned');
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