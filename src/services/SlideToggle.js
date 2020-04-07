import SlideUp from './SlideUp.js';
import SlideDown from './SlideDown.js';

const SlideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return SlideDown(target, duration);
  } else {
    return SlideUp(target, duration);
  }
}

export default SlideToggle;