;(function() {
  var mainMenu = document.querySelector('.main-nav');
  var mainMenuList = mainMenu.querySelector('.main-nav__list');
  var mainMenuToggle = mainMenu.querySelector('.main-nav__toggle');
  var isMenuOpen = true;

  if (!window.matchMedia("(min-width: 1200px)").matches) {
    closeMenu();
  }

  window.addEventListener('resize', function() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  mainMenuToggle.addEventListener('tap', function() {
    
    toggleMenuState();
  });
  
  function toggleMenuState() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function closeMenu() {
    mainMenuList.classList.add('main-nav__list--close');
    mainMenuToggle.classList.remove('main-nav__toggle--open');
    isMenuOpen = false;
  }

  function openMenu() {
    mainMenuList.classList.remove('main-nav__list--close');
    mainMenuToggle.classList.add('main-nav__toggle--open');
    isMenuOpen = true;
  }
}());