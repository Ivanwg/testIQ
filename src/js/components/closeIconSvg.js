import { setAttributes, createELement } from '../utils/helpful';

export function closeIconSvg() {
  const xmlns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(xmlns, 'svg');
  setAttributes(svg, {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
  });
  const path = document.createElementNS(xmlns, 'path');
  setAttributes(path, {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    'd': 'M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z',
    'fill': 'transparent'
  });
  svg.append(path);

  return svg;
}
