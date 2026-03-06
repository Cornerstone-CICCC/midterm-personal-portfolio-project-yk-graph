export const initSpotlight = () => {
  const overlay = document.getElementById('spotlightOverlay');
  const contactSection = document.getElementById('contact');

  if (!overlay || !contactSection) {
    console.warn('Spotlight: Required elements not found');
    return;
  }

  contactSection.addEventListener('mousemove', (e) => {
    const rect = contactSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    overlay.style.background = `radial-gradient(
      circle 200px at ${xPercent}% ${yPercent}%,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.75)
    )`;
  });
};
