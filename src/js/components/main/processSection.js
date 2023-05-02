import { createELement } from '../../utils/helpful';
import { passTestWhiteBtn } from '../passTestBtn';


const mainNodeClassName = 'process';

export function createProcessSection() {
  const section = createELement({elemName: 'section', attrs: {classNames: ['kosmo-bgc', mainNodeClassName]}});
  const container = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const content = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});

  const light1 = createELement({attrs: {classNames: ['lighting', `${mainNodeClassName}__light1`]}});
  const light2 = createELement({attrs: {classNames: ['lighting', `${mainNodeClassName}__light2`]}});

  const topBlock = createELement({attrs: {classNames: [`${mainNodeClassName}__top`]}});
  const middleBlock = createELement({attrs: {classNames: [`${mainNodeClassName}__middle`]}});
  const btn = passTestWhiteBtn([`${mainNodeClassName}__btn`])

  const top1 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`], text: 'Прохождение теста займет у вас не\u00A0более '}});
  const top2 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`, `${mainNodeClassName}__top-yellow`], text: '12\u00A0минут'}});
  const top3 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`], text: ', а его '}});
  const top4 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`, `${mainNodeClassName}__top-bold`], text: 'результаты '}});
  const top5 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`], text: 'вы сможете '}});
  const top6 = createELement({elemName: 'span', attrs: {classNames: [`${mainNodeClassName}__top-common`, `${mainNodeClassName}__top-yellow`], text: 'сможете использовать всю жизнь.'}});
  const copyrigth = createELement({attrs: {classNames: [`${mainNodeClassName}__copyright`], text: 'ⓒ\u00A0\u00A02019'}})
  topBlock.append(top1, top2, top3, top4, top5, top6);
  middleBlock.innerHTML = 'Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни</b>: от финансового до любовного.'

  content.append(topBlock, middleBlock, btn, copyrigth);
  container.append(content);
  section.append(container, light1, light2);
  return section;
}
