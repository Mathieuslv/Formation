function showweatherDetails(event) {
    event.preventDefault();
  
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '8d7658484a4eb543813c14abe8d48911';
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // ← pour voir si c’est une erreur (401, 404, etc.)
        const weatherInfo = document.getElementById('weatherInfo');
  
        // si l’API renvoie une erreur (ex: mauvaise clé, coord invalides…)
        if (data.cod && data.cod !== 200) {
          weatherInfo.innerHTML = `<p style="color:red">${data.message}</p>`;
          return;
        }
  
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(err => {
        console.error(err);
        document.getElementById('weatherInfo').innerHTML = 'Erreur réseau';
      });
  }
  
  document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);
  