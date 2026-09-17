/**
 * Interactive Photos Module — Porto Aksan
 * Handles mobile tap/click and desktop interaction for photos.
 * Allows toggling between grayscale and full-color states, mirroring
 * the desktop hover experience on touch/mobile devices.
 */

export function initInteractivePhotos() {
  // 1. Hero Portrait Photo
  const heroContainer = document.getElementById('heroPortraitContainer');
  const heroImg = document.getElementById('heroPortraitImg');

  if (heroContainer && heroImg) {
    const toggleHero = (e) => {
      e.stopPropagation();
      const willBeColored = !heroImg.classList.contains('is-colored');
      
      heroImg.classList.toggle('is-colored', willBeColored);
      heroContainer.classList.toggle('is-colored', willBeColored);
      heroContainer.setAttribute('aria-pressed', String(willBeColored));
    };

    heroContainer.addEventListener('click', toggleHero);
    heroContainer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleHero(e);
      }
    });
  }

  // 2. Project Card Photos
  const projectContainers = document.querySelectorAll('.project-image-container');
  projectContainers.forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    const toggleProject = (e) => {
      e.stopPropagation();
      const willBeColored = !img.classList.contains('is-colored');

      // Toggle this container and image
      img.classList.toggle('is-colored', willBeColored);
      container.classList.toggle('is-colored', willBeColored);
      container.setAttribute('aria-pressed', String(willBeColored));

      const article = container.closest('.project-item');
      if (article) {
        article.classList.toggle('is-colored', willBeColored);
      }
    };

    container.addEventListener('click', toggleProject);
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleProject(e);
      }
    });
  });

  // 3. Tap/Click outside resets colored state (mirrors unhover on desktop)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#heroPortraitContainer, .project-image-container')) {
      document.querySelectorAll('.is-colored').forEach(el => {
        el.classList.remove('is-colored');
        if (el.hasAttribute('aria-pressed')) {
          el.setAttribute('aria-pressed', 'false');
        }
      });
    }
  });
}
