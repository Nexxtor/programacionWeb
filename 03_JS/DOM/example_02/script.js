const attendantForm = document.forms.attendant;

const results = document.querySelector('.names');
let key = 0;

const createResult = (name, key) => {
  const li = document.createElement('li');
  li.innerText = name;
  li.setAttribute('key', key);
  return li;
}

const addAttendantItem = (name) => { 
  results.appendChild(createResult(name, key));
  key++;
}

attendantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = attendantForm.elements;
  const name = inputs['name'];
  console.log(name.value);
  addAttendantItem(name.value);
  name.value = '';  
});



