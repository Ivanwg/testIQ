import { createELement } from "../utils/helpful";
import { router } from "../variables";


export function passTestBtn(additionalClassnames, onClick=onNavigate, text='пройти тест') {
  const btn = createELement({elemName: 'button', attrs: {classNames: ['btn', 'animated-btn', 'radiused-btn', 'yellowed-btn', ...additionalClassnames], text: text}});
  btn.addEventListener('click', onClick);
  return btn;
}


export function passTestWhiteBtn(additionalClassnames) {
  const btn = createELement({elemName: 'button', attrs: {classNames: ['btn', 'animated-btn', 'radiused-btn', 'white-btn', ...additionalClassnames], text: 'пройти тест'}});
  btn.addEventListener('click', onNavigate);
  return btn;
}

function onNavigate(e) {
  e.preventDefault();
  router.navigate('/test');
}
