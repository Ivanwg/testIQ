import { root } from '../variables';

export function getById(id) {
  const elem = document.getElementById(id);
  return elem;
}

export function createELement({elemName='div', attrs={}}) {
  const elem = document.createElement(elemName);
  if (Object.keys(attrs).length) {
    for (const attrKey of Object.keys(attrs)) {
      if (attrKey == 'classNames') {
        classListAddFromArr(elem, attrs[attrKey]);
      }
      else if (attrKey == 'text') {
        elem.textContent = attrs[attrKey];
      }
      else elem.setAttribute(attrKey, attrs[attrKey]);
    }
  }

  return elem;
}

export function clearRoot() {
  root.innerHTML = '';
}

export function clearElemsTextContent(elem) {
  elem.textContent = '';
}

export function classListAddFromArr(elem, classNamesList) {
  for (const className of classNamesList) {
    elem.classList.add(className);
  }
}

export function makeDisabled(elem) {
  elem.classList.add('disabled');
}



export function stringToFixed(numbStr) {
  let res;
  try {
    res = (parseInt(Number(numbStr) * 100)) / 100;

  }
  catch (err) {
    res = 0.00
  }
  return Number.isInteger(res) ? `${res}` + '.0' : `${res}`;
}

export function clearInputsValues(inputsArr) {
  for (const input of inputsArr) {
    input.value = '';
  }
}

export function clearElemsInnerHtml(elemsArr) {
  for (const elem of elemsArr) {
    elem.innerHTML = '';
  }
}

export function removeClassNameFromElemsArr(elemsArr, className) {
  for (const elem of elemsArr) {
    elem.classList.remove(className);
  }
}

export function getLastFromArr(arr, amount, reverse=false) {
  const sign = amount * -1;
  if (arr) {
    arr.lenthg > amount ? arr.slice(sign) : arr;
    return reverse ? arr.reverse() : arr;
  } else return [];
}





export function checkArrLength(obj, key) {
  try {
    if (obj[key].length) {
      return true;
    }
    else return false;
  } catch (err) {
    return false;
  }
}


export function setAttributes(el, attrs) {
  for(const key in attrs) {
    el.setAttribute(`${key}`, `${attrs[key]}`);
  }
}

export function fixBody() {
  root.classList.remove('stretched');
  document.body.classList.remove('stretched');
  document.body.classList.add('fixed');
}

export function disFixBody() {
  document.body.classList.remove('stretched');
  root.classList.remove('stretched');
  document.body.classList.remove('fixed');
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getMinutesSeconds(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  minutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
  secs = secs > 9 ? `${secs}` : `0${secs}`;
  return `${minutes}:${secs}`;
}

export function stretchBody() {
  document.body.classList.add('stretched');
  root.classList.add('stretched');
}
