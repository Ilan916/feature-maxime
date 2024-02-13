let elt = document.querySelectorAll('.slide-text > *')

anime({
  targets: elt,
  translateX: '-100%',
  duration: 12000,
  easing: 'linear',
  loop: true
});