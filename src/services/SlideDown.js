const SlideDown = (target, duration) => {
  let height = target.offsetHeight; /* [3] */
  let display = window.getComputedStyle(target).display;
  target.style.removeProperty('display'); /* [1] */
  if (display === 'none') { /* [2] */
    display = 'block';
  }
  target.style.display = display;
  target.style.height = 0; /* [4] */
  target.style.paddingTop = 0; /* [5.1] */
  target.style.paddingBottom = 0; /* [5.2] */ 
  target.style.marginTop = 0; /* [6.1] */ 
  target.style.marginBottom = 0; /* [6.2] */ 
  target.style.overflow = 'hidden'; /* [7] */ 
  target.style.boxSizing = 'border-box'; /* [8] */
  target.style.transitionProperty = "height, margin, padding";  /* [9.1] */ 
  target.style.transitionDuration = duration + 'ms'; /* [9.2] */
  target.style.height = height + 'px'; /* [10] */
  target.style.removeProperty('padding-top'); /* [11.1] */ 
  target.style.removeProperty('padding-bottom'); /* [11.2] */ 
  target.style.removeProperty('margin-top'); /* [12.1] */ 
  target.style.removeProperty('margin-bottom'); /* [12.2] */
  window.setTimeout( () => {
    target.style.removeProperty('height'); /* [13] */
    target.style.removeProperty('overflow'); /* [14] */
    target.style.removeProperty('transition-duration'); /* [15.1] */
    target.style.removeProperty('transition-property'); /* [15.2] */
  }, duration);
}

export default SlideDown;