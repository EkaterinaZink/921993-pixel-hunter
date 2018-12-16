const resultsTemplate = (results, answers) => {
  return `<ul class="stats">
  ${results.map((result) => {
    if (result === `right`) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
  }).join(``)}
  ${new Array(answers - results.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;
};

export default resultsTemplate;
