export const initCarousel = () => {
  const buttons = document.querySelectorAll('.carousel__btn');
  const prevBtn = document.querySelector('.carousel__nav--prev');
  const nextBtn = document.querySelector('.carousel__nav--next');

  if (!buttons.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  const updateActiveButton = (index) => {
    buttons.forEach((btn, i) => {
      btn.classList.toggle('carousel__btn--active', i === index);
    });
  };

  const navigateToPage = (page) => {
    window.location.href = `/${page}/`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    updateActiveButton(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % buttons.length;
    updateActiveButton(currentIndex);
  });

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      navigateToPage(page);
    });
  });

  let touchStartX = 0;
  let touchEndX = 0;

  const carousel = document.querySelector('.top__carousel');

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  const handleSwipe = () => {
    if (touchEndX < touchStartX - 50) {
      currentIndex = (currentIndex + 1) % buttons.length;
      updateActiveButton(currentIndex);
    }
    if (touchEndX > touchStartX + 50) {
      currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      updateActiveButton(currentIndex);
    }
  };
};
