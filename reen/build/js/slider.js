;(function() {
  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__list');
  var sliderListItems = slider.querySelectorAll('.slider__list li');
  var screens = Math.ceil(sliderListItems.length / 4);
  var activeScreen = 0;
  var tablet = isTablet();
  var desktop = isDesktop();

  var sliderControls = document.createElement('ul');
  sliderControls.classList.add('slider__controls');

  for (var i = 0; i < screens; i++) {
    var sliderControlsItem = document.createElement('li');
    sliderControlsItem.classList.add('slider__controls-item');
    sliderControls.appendChild(sliderControlsItem);
  }

  slider.appendChild(sliderControls);
  
  changeScreen(sliderControls.children[0]);

  sliderControls.addEventListener('tap', function(e) {
    var target = e.target;
    var controlItem = target.closest('.slider__controls-item');

    if (controlItem) {
      changeScreen(controlItem);
    }
  });

  window.addEventListener('resize', function() {
    if (tablet !== isTablet()) {
      changeScreen(sliderControls.children[activeScreen]);
      tablet = isTablet();
    }

    if (desktop !== isDesktop()) {
      changeScreen(sliderControls.children[activeScreen]);
      desktop = isDesktop();
    }
  });

  function changeScreen(controlItem) {
    var controlItemIndex = getElementIndex(controlItem);

    sliderControls.children[activeScreen].classList.remove('slider__controls-item--active');

    activeScreen = controlItemIndex;

    controlItem.classList.add('slider__controls-item--active')

    if (isTablet()) {
      sliderList.style.marginLeft = -(768 * controlItemIndex) + 'px';
    }
    
    if (isDesktop()) {
      sliderList.style.marginLeft = -(1212 * controlItemIndex) + 'px';
    }
  }

  function isTablet() {
    return (window.matchMedia("(min-width: 768px)").matches && !window.matchMedia("(min-width: 1200px)").matches)
  }

  function isDesktop() {
    return window.matchMedia("(min-width: 1220px)").matches;
  }

  function getElementIndex(node) {
    var index = 0;
    while ((node = node.previousElementSibling)) {
      index++;
    }
    return index;
  }
}());