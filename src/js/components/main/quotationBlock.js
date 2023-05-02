import { createELement } from '../../utils/helpful'

const mainNodeClassName = 'quotation'


export function createQuotationBlock() {
  const wrapElem = createELement({elemName: 'section', attrs: {classNames: [mainNodeClassName]}});
  const container = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const content = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});

  const p1 = createELement({elemName: 'p', attrs: {classNames: [`${mainNodeClassName}__text`, `${mainNodeClassName}__text_first`],
  text: 'Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,'
  }});
  const p2 = createELement({elemName: 'p', attrs: {classNames: [`${mainNodeClassName}__text`],
  text: 'но и выработать список рекомендаций для повышения этого показателя. '}});

  const quote1 = createELement({attrs: {classNames: [`${mainNodeClassName}__quote1`]}});
  const quote2 = createELement({attrs: {classNames: [`${mainNodeClassName}__quote2`]}});

  content.append(quote1, p1, p2, quote2);
  container.append(content);
  wrapElem.append(container);
  return wrapElem;
}
