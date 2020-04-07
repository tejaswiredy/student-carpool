const SlideUp = (target, duration) => {
  target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
  target.style.transitionDuration = duration + 'ms'; /* [1.2] */
  target.style.boxSizing = 'border-box'; /* [2] */
  target.style.height = target.offsetHeight + 'px'; /* [3] */
  target.style.height = 0; /* [4] */
  target.style.paddingTop = 0; /* [5.1] */
  target.style.paddingBottom = 0; /* [5.2] */
  target.style.marginTop = 0; /* [6.1] */
  target.style.marginBottom = 0; /* [7.2] */
  target.style.overflow = 'hidden'; /* [7] */
  window.setTimeout( () => {
    target.style.display = 'none'; /* [8] */
    target.style.removeProperty('height'); /* [9] */
    target.style.removeProperty('padding-top');  /* [10.1] */ 
    target.style.removeProperty('padding-bottom');  /* [10.2] */ 
    target.style.removeProperty('margin-top');  /* [11.1] */ 
    target.style.removeProperty('margin-bottom');  /* [11.2] */ 
    target.style.removeProperty('overflow');  /* [12] */ 
    target.style.removeProperty('transition-duration');  /* [13.1] */ 
    target.style.removeProperty('transition-property');  /* [13.2] */ 
  }, duration);
}

export default SlideUp;