import { initSpotlight } from './spotlight.js';

const init = () => {
  console.log('Contact page loaded');
  initSpotlight();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
