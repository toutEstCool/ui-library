document.querySelector('.player-chunk-prev').addEventListener('click', function () {
  function moveClass (className, activeClassName) {
    let 
    active = document.querySelector('.' + activeClassName)
    prev = active.previousElementSibling

    if (prev && prev.classList.contains(className)) {
      active.classList.remove(activeClassName)
      prev.classList.add(activeClassName)
    }
  }
  moveClass('timeline-chunk', 'timeline-chunk-active')
  moveClass('player-chunk', 'player-chunk-active')
})

document.querySelector('.player-chunk-next').addEventListener('click', function () {
  function moveClass (className) {
    let 
    active = document.querySelector('.' + className)

    if (active.nextElementSibling) {
      active.classList.remove(className)
      active.nextElementSibling.classList.add(className)
    }
  }
  moveClass('timeline-chunk-active')
  moveClass('player-chunk-active')
})


