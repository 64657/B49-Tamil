    async function fetchSpeciesData() {
      try {
        const response = await fetch('http://apiv3.iucnredlist.org/api/v3/species/page/0');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }

    async function displaySpeciesData() {
      try {
        const speciesData = await fetchSpeciesData();
        const speciesDataContainer = document.getElementById('speciesDataContainer');

        speciesDataContainer.innerHTML = '';

        speciesData.result.forEach((species, index) => {
          const div = document.createElement('div');
          div.classList.add('card');
          div.style.width = '18rem';

          const divBody = document.createElement('div');
          divBody.classList.add('card-body');

          const speciesInfo = document.createElement('p');
          speciesInfo.classList.add('species-info');
          speciesInfo.innerHTML = `Name: ${species.scientific_name}<br>Category: ${species.category}<br>Kingdom: ${species.kingdom}`;

          divBody.appendChild(speciesInfo);
          div.appendChild(divBody);
          speciesDataContainer.appendChild(div);

          // Add click event to show species data
          div.addEventListener('click', () => {
            showSpeciesData(index);
          });
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // Fetch countries and regions data
    async function fetchCountryAndRegionData() {
      try {
        const response = await fetch('http://apiv3.iucnredlist.org/api/v3/region/list');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }

    async function displayCountryAndRegionData() {
      try {
        const countryAndRegionData = await fetch(`http://apiv3.iucnredlist.org/api/v3/species/country/${countryOrRegion}`);
        const countriesDataContainer = document.getElementById('countriesDataContainer');
        const regionsDataContainer = document.getElementById('regionsDataContainer');

        countriesDataContainer.innerHTML = '';
        regionsDataContainer.innerHTML = '';

        const countriesList = document.createElement('ul');
        const regionsList = document.createElement('ul');

        countryAndRegionData.results.forEach((data) => {
          if (data.is_country) {
            const countryItem = document.createElement('li');
            countryItem.innerText = data.name;
            countriesList.appendChild(countryItem);
          } else {
            const regionItem = document.createElement('li');
            regionItem.innerText = data.name;
            regionsList.appendChild(regionItem);
          }
        });

        // Append the lists to the respective containers
        countriesDataContainer.appendChild(countriesList);
        regionsDataContainer.appendChild(regionsList);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function fetchAndDisplayData() {
      await displaySpeciesData();
      await displayCountryAndRegionData();
    }

    function showSpeciesData(index) {
      const speciesDataContainers = document.getElementsByClassName('species-info');
      for (let i = 0; i < speciesDataContainers.length; i++) {
        if (i === index) {
          speciesDataContainers[i].classList.remove('hidden');
        } else {
          speciesDataContainers[i].classList.add('hidden');
        }
      }

      const countriesDataContainer = document.getElementById('countriesDataContainer');
      const regionsDataContainer = document.getElementById('regionsDataContainer');

      countriesDataContainer.classList.add('hidden');
      regionsDataContainer.classList.add('hidden');
    }

    // Call the fetchAndDisplayData function on page load to fetch and display the data
    fetchAndDisplayData();

    
    async function displaySpeciesByCountryOrRegion(countryOrRegion) {
      try {
        const response = await fetch(`http://apiv3.iucnredlist.org/api/v3/species/country/${countryOrRegion}`);
        const data = await response.json();

        const speciesListContainer = document.createElement('ul');
        speciesListContainer.classList.add('species-list');

        data.result.forEach((species) => {
          const speciesItem = document.createElement('li');
          speciesItem.classList.add('species-list-item');
          speciesItem.innerHTML = `Name: ${species.scientific_name}<br>Category: ${species.category}<br>Kingdom: ${species.kingdom}`;
          speciesListContainer.appendChild(speciesItem);
        });

        const speciesDataContainer = document.getElementById('speciesDataContainer');
        speciesDataContainer.innerHTML = '';
        speciesDataContainer.appendChild(speciesListContainer);

        // Show the species section
        showSpeciesData();
      } catch (error) {
        console.error('Error:', error);
      }
    }

    function showCountriesData() {
      const countriesDataContainer = document.getElementById('countriesDataContainer');
      const regionsDataContainer = document.getElementById('regionsDataContainer');
      const homeSection = document.querySelector('.home-section');

      countriesDataContainer.classList.remove('hidden');
      regionsDataContainer.classList.add('hidden');
      homeSection.classList.add('hidden');
      displaySpeciesByCountryOrRegion('countries');
    }

    function showRegionsData() {
      const countriesDataContainer = document.getElementById('countriesDataContainer');
      const regionsDataContainer = document.getElementById('regionsDataContainer');
      const homeSection = document.querySelector('.home-section');

      regionsDataContainer.classList.remove('hidden');
      countriesDataContainer.classList.add('hidden');
      homeSection.classList.add('hidden');
      displaySpeciesByCountryOrRegion('regions');
    }

    function showHomeSection() {
      const countriesDataContainer = document.getElementById('countriesDataContainer');
      const regionsDataContainer = document.getElementById('regionsDataContainer');
      const homeSection = document.querySelector('.home-section');

      homeSection.classList.remove('hidden');
      countriesDataContainer.classList.add('hidden');
      regionsDataContainer.classList.add('hidden');
    }
    
