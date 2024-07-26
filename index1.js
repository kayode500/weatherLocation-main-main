 
 let inputValue = document.querySelector('#cityinput');
 let btn = document.querySelector('#add');
 let city = document.querySelector('#citydisplay');
 let desc = document.querySelector('#desc');
 let temperature = document.querySelector('#temp');
 let win = document.querySelector('#wind');
 let ca = document.getElementById('countryabbreviation');
 let wrap = document.querySelector('.wrapper')

 
 
 
 let apiKey = "6ab863b2de1dccf8423bb014477cfc42";

 btn.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ inputValue.value +"&appid="+apiKey).then(res => res.json()).then(
        data => {
            let cityName = data['name'];
            let description = data['weather'][0]['description'];
            let cloudName = data ['weather'][0]['main'];
            let temperature = data['main']['temp'];
            let windSpeed = data['wind']['speed'];
            let counrtyabbreviation = data['sys']['country'];

            city.innerHTML = `weather of <span>${cityName}</span>`;
            desc.innerHTML = `Description:<span>${description}</span> `;
            temp.innerHTML = `Temperature:<span>${temperature}</span>`;
            win.innerHTML = `Wind:<span>${windSpeed}</span>`;
            cloudName.innerHTML = `cloudName:<span>${cloudName}</span>`;
            ca.innerHTML = `countryabbreviation<span>${counrtyabbreviation}</span>`



          

        }
    )
    wrap.style.fontWeight = 800;
    wrap.style.fontSize =32;
    wrap.style.color = 'red';
    
    
 }

 )
 



