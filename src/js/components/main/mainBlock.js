import { createELement, disFixBody, getMinutesSeconds } from '../../utils/helpful';
import { createLandingSection } from './landingSection';
import { createQuotationBlock } from './quotationBlock';
import { createAboutSection } from './aboutSection';
import { createProcessSection } from './processSection';
import { createIQtest } from '../iqTest/iqTest';
import { router } from '../../variables';
import { gsap } from 'gsap';
import { interval } from '../../utils/interval';

let timeoutId;
let secsLeft = 10 * 60;

export function createMain() {
  const main = createELement({elemName: 'main', classNames: ['main']});
  const landingObj = createLandingSection();
  const landingSection = landingObj.section;
  const detailBtn = landingObj.btn;
  main.append(landingSection);
  let dragged = 0;
  const tl = gsap.timeline({paused: true});
  tl.to(detailBtn, {transform: 'translateY(-100%)', opacity: 0, duration: .3, delay: 0, ease: "power2.out"})
  //   quotationSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });


  detailBtn.addEventListener('click', e => {
    e.preventDefault();
    tl.play();
    setTimeout(() => router.navigate('about?scroll=true'), 300);

  });
  detailBtn.addEventListener('touchstart', e => { 

    if(dragged === 1){
        tl.play();
        setTimeout(() => router.navigate('about?scroll=true'), 500);
    }

  })

  return main;
}

export function createAboutMain(scroll) {
  const main = createELement({elemName: 'main', classNames: ['main']});
  const quotationSection = createQuotationBlock();
  const aboutSection = createAboutSection();
  const processSection = createProcessSection();
  main.append(quotationSection, aboutSection, processSection);

  if (scroll) {
    const tl = gsap.timeline();
    tl.from(main, {transform: 'translateY(100%)', opacity: 0, duration: .5, delay: 0, ease: "power2.out"})
  }

  return main;
}

export function createStartTestMain() {
  const main = createELement({elemName: 'main', attrs: {classNames: ['main']}});
  main.append(createIQtest());

  return main;
}

export function createNotFound() {
  const main = createELement({elemName: 'main', attrs: {classNames: ['main']}});
  const container = createELement({attrs: {classNames: ['container']}});
  const title = createELement({elemName: 'h1', attrs: {classNames: ['not-found'], text: 'Страница не найдена'}});
  container.append(title);
  main.append(container);
  return main;
}

export function createResultPage() {
  const mainClassName = 'result';
  const main = createELement({elemName: 'main', attrs: {classNames: ['main']}});
  const section = createELement({elemName: 'section', attrs: {classNames: ['kosmo-bgc', mainClassName]}});
  const container = createELement({attrs: {classNames: ['container', `${mainClassName}__container`]}});
  const content = createELement({attrs: {classNames: [`${mainClassName}__content`]}});
  const title1 = createELement({elemName: 'h1', attrs: {classNames: [`${mainClassName}__title`], text: 'Ваш результат рассчитан:'}});
  const percentBlock = createELement({attrs: {classNames: [`${mainClassName}__res`]}});
  const percent = createELement({elemName: 'span', attrs: {classNames: [`${mainClassName}__comment`, `${mainClassName}__percent`], text: 'Вы относитесь к 3%'}});
  const comment= createELement({elemName: 'span', attrs: {classNames: [`${mainClassName}__comment`]}});
  comment.innerHTML = ' респондентов, чей уровень интеллекта более чем на 15\u00A0пунктов отличается от среднего в большую или меньшую сторону! '
  const title2 = createELement({elemName: 'h2', attrs: {classNames: [`${mainClassName}__title-green`], text: 'Скорее получите свой результат!'}});
  const personal = createELement({attrs: {classNames: [`${mainClassName}__personal`], text: 'В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона'}});
  const timer = createELement({attrs: {classNames: [`${mainClassName}__timer`]}});
  timer.innerHTML = 'Звоните скорее, запись доступна всего<br>';
  const time = createELement({elemName: 'span', attrs: {classNames: [`${mainClassName}__time`], text: getMinutesSeconds(secsLeft)}});
  const minutes = createELement({elemName: 'span', attrs: {classNames: [`${mainClassName}__minutes`], text: ' минут'}});
  timer.append(time, minutes);

  const callBtn = createELement({elemName: 'button', attrs: {classNames: [`${mainClassName}__btn`], text: 'Позвонить и прослушать результат'}});
  const userData = createELement({attrs: {classNames: [`${mainClassName}__fetch-data`]}});
  const footer = createELement({attrs: {classNames: [`${mainClassName}__footer`]}});
  footer.innerHTML = 'TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU<br>DE DIVERTISMENT. PRIN FOLOSIREA LUI<br>DECLARATI CA AVETI 18 ANI IMPLINITI, ';
  const light1 = createELement({attrs: {classNames: ['lighting', `${mainClassName}__light1`]}});
  const light2 = createELement({attrs: {classNames: ['lighting', `${mainClassName}__light2`]}});
  percentBlock.append(percent, comment);
  content.append(title1, percentBlock, title2, personal, timer, callBtn, userData, footer);
  container.append(content);
  section.append(container, light1, light2);
  main.append(section);

  callBtn.addEventListener('click', e => {
    e.preventDefault();
    fetch('https://swapi.dev/api/people/1').then(res => res.json()).then(obj => {
      userData.innerHTML = `Имя: ${obj.name} <br> рост: ${obj.height} <br> цвет глаз:  ${obj.eye_color}`;
    });
  });

  clearTimeout(timeoutId);

  timeoutId = interval(() => {
    secsLeft -= 1;
    time.textContent = getMinutesSeconds(secsLeft);
    if (secsLeft <= 0) {
      callBtn.setAttribute('disabled', true);
    }
    return secsLeft;
  }, 1000);

  return main;
}
