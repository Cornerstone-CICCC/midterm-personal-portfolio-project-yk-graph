import { initSpotlight } from './spotlight.js';

const init = () => {
  initSpotlight();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
