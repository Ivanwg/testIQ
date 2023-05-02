import { createELement } from '../../utils/helpful';
import { router } from '../../variables';
import { createBurgerSvg } from '../burgerSvg';
import { closeIconSvg } from '../closeIconSvg';
import { gsap }  from "gsap";


const navList = ['Главная', 'Информация о тесте', 'пройти тест'];
const navNodeClassName = 'hiddenMenu';

const mainNodeClassName = 'header';
const logoClassName = 'logo';


let tl;
let logoLinkBtn;
let burgerBtn;
let logoText;
let readyText;


export function createHeader() {
  const headerElem = createELement({elemName: 'header', attrs: {classNames: [mainNodeClassName]}});
  const containerElem = createELement({attrs: {classNames: ['container', `${mainNodeClassName}__container`]}});
  const contentElem = createELement({attrs: {classNames: [`${mainNodeClassName}__content`]}});
  burgerBtn = createELement({elemName: 'button', attrs: {classNames: ['btn', 'animated-btn', 'burger', `${mainNodeClassName}__burger`]}});
  const burgerSvg = createBurgerSvg();
  const logoWrap = createELement({attrs: {classNames: [`${mainNodeClassName}__logo-wrap`]}});
  logoLinkBtn = createELement({elemName: 'button', attrs: {classNames: ['btn', logoClassName, `${mainNodeClassName}__logo`]}});
  const logoImg = createELement({elemName: 'img', attrs: {classNames: ['img', `${logoClassName}__img`], src: 'img/brainLogo.png'}});
  logoText = createELement({elemName: 'span', attrs: {classNames: [`${logoClassName}__text`], text: 'тест на определение IQ'}});
  readyText = createELement({elemName: 'span', attrs: {classNames: [`ready`], text: 'готово!', disabled: true}});
  burgerBtn.addEventListener('click', onOpen);

  logoLinkBtn.removeEventListener('click', onNavigate);
  logoLinkBtn.addEventListener('click', onNavigate);

  burgerBtn.append(burgerSvg);
  logoLinkBtn.append(logoImg, logoText);
  logoWrap.append(logoLinkBtn);
  contentElem.append(burgerBtn, logoWrap, readyText);
  containerElem.append(contentElem, createNavBlock());
  headerElem.append(containerElem);

  return headerElem;
}

function onNavigate(e) {
  e.preventDefault();
  router.navigate('/');
}


function createNavBlock() {
  const hiddenMenu = createELement({attrs: {classNames: [navNodeClassName]}});
  const closeBtn = createELement({elemName: 'button', attrs: {
    classNames: ['btn', 'animated-btn', `${navNodeClassName}__close-btn`],
  }});
  tl = gsap.timeline({paused: true});
  tl.to(hiddenMenu, {transform: 'translateX(0)', opacity: 1, duration: .5, delay: 0, ease: "power2.out"})
  tl.to(closeBtn, {transform: 'translateY(0)', opacity: 1, duration: .5, delay: 0, ease: "power2.out"}, '-=.3')

  const navElem = createELement({elemName: 'nav', attrs: {classNames: [`${navNodeClassName}__nav`]}});
  const ulElem = createELement({elemName: 'ul', attrs: {classNames: [`${navNodeClassName}__list`]}});
  navList.map(el => {
    const liElem = createELement({elemName: 'li', attrs: {classNames: [`${navNodeClassName}__item`]}});
    const linkBtn = createELement({elemName: 'button', attrs: {
      classNames: ['btn', 'animated-btn', `${navNodeClassName}__link`],
      text: el
    }});
    linkBtn.addEventListener('click', e => {
      onClose(e);
      if (el === navList[0])  {
        router.navigate('/');
      } else if (el === navList[1]) {
        router.navigate('/about');
      } else {
        router.navigate('/test');
      }
    });
    liElem.append(linkBtn);
    ulElem.append(liElem);
  });
  const svg = closeIconSvg();
  closeBtn.append(svg);
  closeBtn.addEventListener('click', onClose);

  navElem.append(ulElem);
  hiddenMenu.append(navElem, closeBtn);

  return hiddenMenu;
}

export function hideLogo() {
  logoLinkBtn.setAttribute('disabled', true);
  burgerBtn.classList.add('header__burger_one');
}

export function displayLogo() {
  logoLinkBtn.removeAttribute('disabled');
  logoText.removeAttribute('disabled');
  burgerBtn.classList.remove('header__burger_one');
}

function onClose(e) {
  e.preventDefault();
  tl.reverse();
}

function onOpen(e) {
  e.preventDefault();
  tl.play();
}

export function modifyLogoText() {
  logoText.setAttribute('disabled', true);
  readyText.removeAttribute('disabled');
}
