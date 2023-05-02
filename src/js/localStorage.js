

const KEY = 'IQ_ANSWERS';

export function setUserAnswers(items=[]) {
  sessionStorage.setItem(KEY, JSON.stringify(items));
}

export function getUserAnswers() {
  const items = sessionStorage.getItem(KEY);
  return items ? JSON.parse(items) : [];
}

export function appendUserAnswer(answObj) {
  const items = getUserAnswers();
  items.push(answObj);
  setUserAnswers(items);
}
