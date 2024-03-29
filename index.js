document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button');
    const dateSelected = document.getElementById('date-selected');
    const cardImage = document.querySelector('.card-image');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); 
        // Get the user-selected date
        const date = dateSelected.value; 
        const apiKey = 'njiXln4ty0a3wi9kruhsGYPKR0KgT7HIPdusfR3w';
        // const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
         const apiUrl = `https://api.nasa.gov/EPIC/api/natural/date/2019/05/30?api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if(data.media_type === "image") { 
                    const imageHtml = `<img src="${data.url}" alt="NASA APOD for ${date}" style="max-width: 100%; height: auto;">`;
                    cardImage.innerHTML = imageHtml; 
                } else {
                    cardImage.innerHTML = '<p>The APOD for the selected date is not an image.</p>'; 
                }
            })
            .catch(error => {
                console.error('Error fetching APOD:', error);
                cardImage.innerHTML = '<p>Error loading the image.</p>'; 
            });
    });
});
