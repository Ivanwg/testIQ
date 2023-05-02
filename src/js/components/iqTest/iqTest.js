import data from '../../../questions.json';
import { setUserAnswers, getUserAnswers, appendUserAnswer } from '../../localStorage';
import { createELement, shuffle, removeClassNameFromElemsArr } from '../../utils/helpful';
import { router } from '../../variables';
import { passTestBtn } from '../passTestBtn';


let questionWrap;
let progressBar;
const mainNodeClassName = 'question-block'

export function createIQtest() {
  setUserAnswers([]);
  const wrap = createELement({attrs: {classNames: ['kosmo-bgc', mainNodeClassName]}});
  const container = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const content = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});
  progressBar = createELement({elemName: 'progress', attrs: {classNames: ['progressbar', `${mainNodeClassName}__progressbar`], value: 0, max: '100'}});
  questionWrap = createELement({attrs: {classNames: [`${mainNodeClassName}__question`]}});
  content.append(progressBar, questionWrap);
  container.append(content);
  wrap.append(container);
  checkUserAnswers();
  return wrap;
}

function createQuestion(questionObj) {
  questionWrap.innerHTML = '';
  const mainClassName = 'question';
  const question = createELement({attrs: {classNames: [mainClassName]}});
  const title = createELement({elemName: 'h2', attrs: {classNames: [`${mainClassName}__title`]}});
  title.innerHTML = questionObj.q;


  question.append(title);
  if (questionObj.img.length) {
    const image = createELement({elemName: 'img', attrs: {classNames: [`${mainClassName}__img`], src: questionObj.img}});
    question.append(image);
  }

  const answersUl = createELement({elemName: 'ul', attrs: {classNames: [`${mainClassName}__answers`]}});
  const itemsList = [];
  if (questionObj.type === 'btns') {
    answersUl.classList.add('btns-list');
  } else if (questionObj.type === 'radio') {
    answersUl.classList.add('radio-list');
  } else if (questionObj.type === 'colors') {
    answersUl.classList.add('colors-list');
  }

  let answersData = questionObj.a;
  if (questionObj.randomised === 'true') {
    answersData = shuffle(answersData);
  }
  let activeData = '';
  const btn = passTestBtn([`${mainClassName}__btn`], (e) => onNext(e, questionObj.q, activeData), 'Далее');
  btn.setAttribute('disabled', true);
  for (const item of answersData) {
    const li = createELement({elemName: 'li', attrs: {classNames: [`answer`]}});
    itemsList.push(li);

    if (questionObj.type === 'btns') {
      li.textContent = item;
      li.addEventListener('click', e => {
        activeData = item;
        removeClassNameFromElemsArr(itemsList, 'btn_active');
        e.target.classList.add('btn_active');
        btn.removeAttribute('disabled');
      });
    } else if (questionObj.type === 'radio') {
      const circle = createELement({elemName: 'span', attrs: {classNames: [`circle`]}});
      const text = createELement({elemName: 'span', attrs: {classNames: [`radio-text`], text: item}});
      li.append(circle, text);
      li.addEventListener('click', e => {
        activeData = item;
        removeClassNameFromElemsArr(itemsList, 'radio_active');
        e.target.classList.add('radio_active');
        btn.removeAttribute('disabled');
      });
    } else if (questionObj.type === 'colors') {
      li.setAttribute('style', `background-color: ${item}`);
      li.addEventListener('click', e => {
        activeData = item;
        removeClassNameFromElemsArr(itemsList, 'color_active');
        e.target.classList.add('color_active');
        btn.removeAttribute('disabled');
      });
    }
    answersUl.append(li);
  }


  question.append(answersUl, btn);

  questionWrap.append(question);
}


function checkUserAnswers() {
  const answered = getUserAnswers();
  const progressValue = Math.ceil((answered.length + 1) * 100 / data.length);
  progressBar.setAttribute('value', progressValue);
  createQuestion(data[answered.length])
}

function onNext(e, question, answer) {
  e.preventDefault();
  const obj = {question, answer}
  appendUserAnswer(obj);
  if (getUserAnswers().length >= data.length) {
    createProcessResultBlock();
  } else {
    checkUserAnswers();
  }
}

function createProcessResultBlock() {
  questionWrap.innerHTML = '';
  const mainClassName = 'loading';
  const contentWrap = createELement({attrs: {classNames: [mainClassName]}});
  const title = createELement({elemName: 'h2', attrs: {classNames: [`${mainClassName}__title`], text: 'Обработка результатов'}});
  const spinnerWrap = createELement({attrs: {classNames: [`${mainClassName}__spinner`]}});
  const spinner = createELement({attrs: {classNames: ['spinner']}});
  spinnerWrap.append(spinner);
  const defineBlock = createELement({attrs: {classNames: [`${mainClassName}__define`]}});
  defineBlock.innerHTML = 'Определение стиля мышления';
  contentWrap.append(title, spinnerWrap, defineBlock);
  questionWrap.append(contentWrap);

  const timeId = setInterval(() => {
    defineBlock.textContent += '. ';
  }, 300);
  setTimeout(() => {
    clearInterval(timeId);
    router.navigate('/result');
  }, 2000);
}
