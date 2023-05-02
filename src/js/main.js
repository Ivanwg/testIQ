import { root } from './variables';
import { createHeader, hideLogo, displayLogo, modifyLogoText } from './components/header/header';
import { createMain, createStartTestMain, createAboutMain, createNotFound, createResultPage } from './components/main/mainBlock';
import { clearRoot, disFixBody, fixBody, stretchBody } from './utils/helpful';
import { router } from './variables';



router.on('/', function () {
  fixBody();
  clearRoot();
  root.append(createHeader(), createMain());
  hideLogo();
});

router.on('/about', function ({ params }) {
  const scroll = params && 'scroll' in params && params['scroll'] === 'true' ? true : false;
  disFixBody();
  clearRoot();
  root.append(createHeader(), createAboutMain(scroll));
  displayLogo();
});

router.on('/test', function () {
  fixBody();
  clearRoot();
  root.append(createHeader(), createStartTestMain());
  displayLogo();
});

router.on('/result', function () {
  stretchBody();
  clearRoot();
  root.append(createHeader(), createResultPage());
  modifyLogoText();
});

router.notFound(() => {
  fixBody();
  clearRoot();
  root.append(createHeader(), createNotFound());
  displayLogo();
});

router.resolve();

