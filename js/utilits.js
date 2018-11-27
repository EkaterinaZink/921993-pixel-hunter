const mainElement = document.querySelector(`#main`);

const createDomElement = (template) => {
  const item = document.createElement(`span`);
  item.innerHTML = template;
  return item;
};

const renderScreen = (item) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(item);
};
export {
  createDomElement,
  renderScreen
};
