export const initSpotlight = () => {
  const overlay = document.getElementById('spotlightOverlay');
  const topSection = document.getElementById('top');

  if (!overlay || !topSection) {
    console.warn('Spotlight: Required elements not found');
    return;
  }

  topSection.addEventListener('mousemove', (e) => {
    const rect = topSection.getBoundingClientRect();
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
