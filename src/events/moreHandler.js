const moreHandler = e => {
  let text = String(e.target.textContent);
  let update = '';
  if (text.includes('less', 1)) {
    update = ' more...'
  } else if (text.includes('more', 1)) {
    update = ' less...';
  }
  e.target.innerHTML = update;
  e.target.previousElementSibling.classList.toggle('hidden');
};

export default moreHandler;
