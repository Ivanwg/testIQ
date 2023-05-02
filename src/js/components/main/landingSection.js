import { createELement } from "../../utils/helpful";
import { passTestBtn } from '../passTestBtn';

const mainNodeClassName = 'landing';

export function createLandingSection() {
  const section = createELement({elemName: 'section', attrs: {classNames: ['section', 'kosmo-bgc', mainNodeClassName]}});
  const containerElem = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const contentElem = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});
  const topContent = createELement({attrs: {classNames: [`${mainNodeClassName}__top`]}});
  const middleContent = createELement({attrs: {classNames: [`${mainNodeClassName}__middle`]}});
  const bottomContent = createELement({attrs: {classNames: [`${mainNodeClassName}__bottom`]}});
  const textTopSpan = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__welcome`], text: 'Пройдите точный и быстрый'}});
  const titleH1 = createELement({elemName: 'h1', attrs: {classNames: ['title', `${mainNodeClassName}__title`], text: 'тест на определение IQ'}});
  const btn = passTestBtn([`${mainNodeClassName}__btn`]);
  const bottomTextSpan = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__bottom-text`],
    text: 'И получите рекомендации по развитию своего интеллекта'
  }});
  const spanWhite = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__bottom-text_white`],
    text: 'и улучшению финансового благосостояния и личной жизни'
  }});
  const btnDetailed = createELement({elemName: 'button', attrs: {classNames: ['btn', 'animated-btn', `${mainNodeClassName}__detailed`]}});
  const detailedIcon = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__detailed-icon`]}});
  const detailedText = createELement({elemName: 'span', attrs: {classNames: [], text: 'Подробнее'}});

  btnDetailed.append(detailedIcon, detailedText);
  bottomTextSpan.append(spanWhite);
  topContent.append(textTopSpan, titleH1);
  bottomContent.append(btn, bottomTextSpan, btnDetailed);
  contentElem.append(topContent, middleContent, bottomContent);
  containerElem.append(contentElem);
  section.append(containerElem);
  return {
    section: section,
    btn: btnDetailed
  };
}
