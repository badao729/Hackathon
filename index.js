document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button');
    const dateSelected = document.getElementById('date-selected');
    const cardImage = document.querySelector('.card-image');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        const date = dateSelected.value; 
        const apiKey = 'njiXln4ty0a3wi9kruhsGYPKR0KgT7HIPdusfR3w';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const imageHtml = `<img src="${data.url}" alt="NASA APOD for ${date}" style="max-width: 100%; height: auto;">`;
                cardImage.innerHTML = imageHtml;
            })
            .catch(error => {
                console.error('Error fetching APOD:', error);
                cardImage.innerHTML = '<p>Error loading the image.</p>';
            });
    });
});
