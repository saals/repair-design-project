export default function replaceElem(elem) {
  if (window.matchMedia('(min-width:992px)').matches) {
    deleteInsertElem('.projects__slider-txt', elem);
  }
  window.addEventListener('resize', () => {
    window.matchMedia('(min-width:992px)').matches
      ? deleteInsertElem('.projects__slider-txt', elem)
      : deleteInsertElem('.projects__slider-img', elem)
  });
}

function deleteInsertElem(parentElem, childElem) {
  let projectsNavigation = document.querySelector(childElem);
  projectsNavigation = projectsNavigation.parentNode.removeChild(projectsNavigation);
  document.querySelector(parentElem).insertAdjacentElement('beforeend', projectsNavigation);
}
