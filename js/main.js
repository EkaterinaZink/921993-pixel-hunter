import Router from './router.js';
import QuestionsService from './questions-service.js';

const questionService = new QuestionsService();
questionService
  .load()
  .then((data) => {
    document.body.classList.remove(`loading`);
    // questData = ;
    Router.showIntro(data);
  })
  .catch(Router.showError);


