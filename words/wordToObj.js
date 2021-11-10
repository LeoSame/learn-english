const words = document.querySelectorAll('.js-word');

let arr = [];

let category = document.querySelector('.title-learn-set').textContent;

for (let i = 0; i < words.length; i++) {
  const nodeWord = words[i];

  const soundLink = nodeWord.querySelector('.sound-item a').href;

  const engWord = nodeWord.querySelector('.word').textContent;

  const ruWord = nodeWord.querySelector('.translate').textContent;

  const imgLink = nodeWord.querySelector('.img-item').src;

  arr.push({ soundLink, engWord, ruWord, imgLink, category });
}

arr;
