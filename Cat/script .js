async function fetchData() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=REPLACE_ME');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function displayData() {
  try {
    const data = await fetchData();
    const dataContainer = document.getElementById('dataContainer');

    dataContainer.innerHTML = '';

    data.forEach((cat, index) => {
      const img = document.createElement('img');
      img.src = cat.url;
      img.alt = 'Cat Image';

      const div = document.createElement('div');
      div.classList.add('card');
      div.style.width = '18rem';

      const divBody = document.createElement('div');
      divBody.classList.add('card-body');
      divBody.appendChild(img);

      const button = document.createElement('button');
      button.innerText = `Pic ${index + 1}`;
      button.classList.add('btn', 'btn-primary', 'mt-3');

      button.addEventListener('click', () => {
        alert(`You clicked Pic ${index + 1}`);
      });

      divBody.appendChild(button);

      div.appendChild(divBody);
      dataContainer.appendChild(div);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

const addPicBtn = document.getElementById('addPicBtn');
addPicBtn.addEventListener('click', () => {
  displayData();
});

displayData();
