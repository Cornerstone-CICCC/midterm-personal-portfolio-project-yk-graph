export const initCarousel = () => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const cards = track.querySelectorAll('.carousel__card');

  const updateCenterCard = () => {
    const trackRect = track.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(centerX - cardCenterX);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }

      card.classList.remove('carousel__card--center');
    });

    if (closestCard) {
      closestCard.classList.add('carousel__card--center');
    }
  };

  track.addEventListener('scroll', updateCenterCard);
  updateCenterCard();
};
