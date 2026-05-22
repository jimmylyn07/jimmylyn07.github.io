window.onload = function() {
    const track = document.getElementById('skills-track');
    
    // 1. Clone the content to ensure it's long enough to loop
    const trackContent = track.innerHTML;
    track.innerHTML = trackContent + trackContent + trackContent;

    let scrollPosition = 0;
    const speed = 0.5; 

    function animate() {
        scrollPosition -= speed;

        // 2. The Reset Logic
        // We use a third of the total width because we tripled the content
        const resetPoint = track.scrollWidth / 3;

        if (Math.abs(scrollPosition) >= resetPoint) {
            scrollPosition = 0;
        }

        track.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(animate);
    }

    animate();
};

document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('#typed', {
    strings: [
      "a Wordpress Developer.", 
      "an Elementor Expert.",
      "a Frontend Developer.", 
      "a Graphic Designer."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500, // Pause before deleting
    startDelay: 500,  // Pause before starting
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
});

// 1. Logic to Scroll Left/Right
  function scrollGrid(distance) {
    const container = document.getElementById('scroll-container');
    container.scrollBy({ left: distance, behavior: 'smooth' });
  }

  // 2. Logic to Filter Categories
  function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const container = document.getElementById('scroll-container');
    
    // Reset scroll position to start when changing categories
    container.scrollTo({ left: 0, behavior: 'smooth' });

    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Optional: Update button colors to show which one is active
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.classList.remove('bg-indigo-500', 'text-white');
      btn.classList.add('bg-gray-800', 'text-gray-300');
    });
    event.target.classList.add('bg-indigo-500', 'text-white');
  }
  