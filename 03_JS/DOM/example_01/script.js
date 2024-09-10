// Get elements 
const p = document.getElementById('parrafo');
const paragraphs = document.getElementsByTagName('p');

console.log(p);

for (const p of paragraphs) {
  console.log(p);
}

// Get elements CSS style
const p2 = document.querySelector('button~p');
console.log({ p2 });

const h1 = document.querySelectorAll('h1');
console.log(h1);
h1.forEach((element) => {
  console.log(element);
  element.innerHTML += ' <em> JS RULES!</em>';
  element.style.color = 'red';
});

const ul = document.createElement('ul');
ul.className = 'list-results';
ul.classList.add('second-class');

p2.appendChild(ul);
const kSizeLi = 10;

for (let i = 0; i < kSizeLi; ++i) {
  let li = document.createElement('li');
  li.setAttribute('key', i);
  ul.appendChild(li);
}

const clickMeButton = document.querySelector('.clickme');

clickMeButton.addEventListener('click', (evt) => {
  console.log('Aush!');
});
