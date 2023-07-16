const headerMenuLinks = document.querySelectorAll('.header__link');

const clearAllLinksActive = () => {
  headerMenuLinks.forEach(elem => 
    elem.classList.remove('header__link_active')
  );
}

const selectHeaderNavLink = (a) => {
  clearAllLinksActive();
  a.classList.add('header__link_active');
}

headerMenuLinks.forEach(elem => {
  elem.addEventListener('click', (e) => selectHeaderNavLink(e.currentTarget))
})