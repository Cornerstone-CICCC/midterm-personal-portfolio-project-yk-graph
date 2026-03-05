import { initSpotlight } from './modules/spotlight.js';

const init = () => {
  initSpotlight();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
