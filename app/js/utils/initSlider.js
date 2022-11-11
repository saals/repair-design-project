export default function initSlider(data) {
  if (!data || !data.length) return;

  const prev = document.querySelector('.slider-button-prev');
  const next = document.querySelector('.slider-button-next');
  const navTitle = document.querySelector('.projects__nav-title');
  const sliderPagination = document.querySelector('.projects__pagination');

  renderList(data, '.projects__img-slide', writeImg);
  renderList(data, '.projects__txt-slide', writeTextInfo);
  renderList(data, '.slider-pagination');
  renderList(data, '.projects__nav-title p span', writeTextInfo);

  navTitle.addEventListener('click', evt => {
    const index = evt.target.getAttribute('data-index');
    toggleSlide(index);
  })
  sliderPagination.addEventListener('click', evt => {
    const index = evt.target.getAttribute('data-index');
    toggleSlide(index);
  })
  next.addEventListener('click', () => {
    let index = +sliderPagination.querySelector('.active').getAttribute('data-index');
    index === data.length - 1 ? index = 0 : index++
    toggleSlide(`${index}`);
  })
  prev.addEventListener('click', () => {
    let index = +sliderPagination.querySelector('.active').getAttribute('data-index');
    index === 0 ? index = data.length - 1 : index--
    toggleSlide(`${index}`);
  })

}

function renderList(data, elemClass, writeContent) {
  const elem = document.querySelector(elemClass);
  data.forEach((item, index) => {
    const cloneElem = elem.cloneNode(true);
    if (!index) cloneElem.classList.add('active');
    cloneElem.setAttribute('data-index', index);
    elem.parentElement.insertAdjacentElement('beforeend', cloneElem);
    if (writeContent) {
      writeContent(cloneElem, item);
    }
  });
  elem.parentNode.removeChild(elem);
}

function writeImg(elemNode, itemData) {
  elemNode.querySelector('img').setAttribute('src', itemData.url);
}

function writeTextInfo(elemNode, itemData) {
  if (elemNode.querySelector('.city')) elemNode.querySelector('.city').textContent = itemData.city;
  if (elemNode.querySelector('.area')) elemNode.querySelector('.area').textContent = `${itemData.area} m2`;
  if (elemNode.querySelector('.time')) elemNode.querySelector('.time').textContent = `${itemData.time} months`;
  if (elemNode.querySelector('.cost')) elemNode.querySelector('.cost').textContent = itemData.cost;
  if (elemNode.classList.contains('city')) elemNode.textContent = itemData.city;
}

function toggleSlide(indexSlide) {
  document.querySelectorAll('[data-index]').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-index') === indexSlide) {
      item.classList.add('active');
    }
  });
}
