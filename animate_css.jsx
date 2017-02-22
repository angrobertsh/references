// first npm install animate.css --save

// put this in your html header
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

// Always include this somewhere in your js file

whichTransitionEvent(){
  let t;
  let el = document.createElement('fakeelement');
  let transitions = {
    'animation':'animationend',
    'OAnimation':'oAnimationEnd',
    'MozAnimation':'animationend',
    'WebkitAnimation':'webkitAnimationEnd'
  }

  for(t in transitions){
    if( el.style[t] !== undefined ){
      return transitions[t];
    }
  }
}

// How to implement a fade-in. First start item as having a hidden class and implement it yourself
// CSS:
// .hidden {
//   visibility: hidden;
// }
//
// .visible {
//   visibility: visible;
// }

activeEl = document.getElementById("yas");
activeEl.classList.add("fadeIn", "animated", "visible");
activeEl.classList.remove("hidden");

let transitionEvent = this.whichTransitionEvent();
transitionEvent && activeEl.addEventListener(transitionEvent, () => {
  activeEl.classList.remove("fadeIn", "animated", "visible");
  activeEl.classList.add("hidden");
});
