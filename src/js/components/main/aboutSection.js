import { createELement } from '../../utils/helpful';
import { passTestBtn } from '../passTestBtn';


const mainNodeClassName = 'about';

export function createAboutSection() {
  const section = createELement({elemName: 'section', attrs: {classNames: [mainNodeClassName]}});
  const container = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const content = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});
  const textElem = createELement({attrs: {classNames: [`${mainNodeClassName}__text`]}});
  textElem.innerHTML = 'Также по результатам тестa ' + '<b>Вы\u00A0получите</b>'.toUpperCase() + ' подробные ' + '<b>советы</b>'.toUpperCase() + ' по определению наиболее перспективной ' +
   '<b>для\u00A0вашего типа</b> '.toUpperCase() + '<b>интеллекта</b>' + ' <b>сферы деятельности</b>, '.toUpperCase() +
  '<br>которая принесет вам скорейший финансовый результат.';
  const scheme= createELement({elemName: 'img', attrs: {classNames: [`${mainNodeClassName}__scheme`], src: 'img/about.png'}});
  const btn = passTestBtn([`${mainNodeClassName}__btn`]);

  content.append(textElem, scheme, btn);
  container.append(content);
  section.append(container);
  return section;
}
