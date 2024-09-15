const attendantForm = document.forms.attendant;
const results = document.querySelector('.names');
let isEditing = false;
let currentEditingItem = null;

const createResult = (name) => {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = name;

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit');
  editBtn.addEventListener('click', () => enterEditMode(li, span));

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => deleteAttendantItem(li));

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
};

const addAttendantItem = (name) => {
  const newAttendant = createResult(name);
  results.appendChild(newAttendant);
};

const enterEditMode = (li, span) => {
  document.getElementById('name').value = span.innerText;
  isEditing = true;
  currentEditingItem = { li, span };
  attendantForm.querySelector('input[type="submit"]').value = 'Update Attendant';
};

const updateAttendantItem = (name) => {
  currentEditingItem.span.innerText = name;
  resetForm();
};

const resetForm = () => {
  document.getElementById('name').value = '';
  isEditing = false;
  currentEditingItem = null;
  attendantForm.querySelector('input[type="submit"]').value = 'Add Attendant';
};

const deleteAttendantItem = (li) => {
  if (confirm('Are you sure you want to delete this attendant?')) {
    li.remove();
  }
};

attendantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = attendantForm.elements;
  const name = inputs['name'];

  if (name.value.trim() !== '') {
    if (isEditing) {
      updateAttendantItem(name.value);
    } else {
      addAttendantItem(name.value);
    }
    name.value = '';
  } else {
    alert('Please enter a name.');
  }
});
