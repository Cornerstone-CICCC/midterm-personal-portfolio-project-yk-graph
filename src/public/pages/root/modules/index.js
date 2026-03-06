import { initCarousel } from './carousel.js';
import { initTerminal } from './terminal.js';

const init = () => {
  initCarousel();
  initTerminal();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
