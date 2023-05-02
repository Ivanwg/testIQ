import { setAttributes, createELement } from '../utils/helpful';

export function createBurgerSvg() {
  const xmlns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(xmlns, 'svg');
  setAttributes(svg, {
    width: 24,
    height: 16,
    viewBox: '0 0 24 16',
    fill: 'none',
  });
  const path = document.createElementNS(xmlns, 'path');
  setAttributes(path, {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    'd': 'M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z',
    'fill': 'transparent'
  });
  svg.append(path);

  return svg;
}