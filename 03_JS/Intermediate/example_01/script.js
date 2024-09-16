'use strict'; // use strict mode

// Simulating API call with Promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('Data fetched successfully using Promise!');
      } else {
        reject('Error fetching data using Promise.');
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Using Promise to handle the API call
document.getElementById('promiseBtn').addEventListener('click', () => {
  const promiseResult = document.getElementById('promiseResult');
  promiseResult.textContent = 'Fetching data...';

  fetchDataWithPromise()
    .then((result) => {
      promiseResult.textContent = result;
    })
    .then(() => console.log('Otro then'))
    .catch((error) => {
      promiseResult.textContent = error;
    });

    console.log('Linea');
});

// Simulating API call with async/await
async function fetchDataWithAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve('Data fetched successfully using Async/Await!');
      } else {
        reject('Error fetching data using Async/Await.');
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Using async/await to handle the API call
document.getElementById('asyncBtn').addEventListener('click', async () => {
  const asyncResult = document.getElementById('asyncResult');
  asyncResult.textContent = 'Fetching data...';

  try {
    const result = await fetchDataWithAsync();
    asyncResult.textContent = result;
  } catch (error) {
    asyncResult.textContent = error;
  }
});
