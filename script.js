const input = document.querySelector(".searchbar")
const btn = document.getElementById("btn")
const weather_img = document.querySelector(".image")
const temp = document.querySelector('.dig')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const speed = document.getElementById('wind')
const error = document.querySelector('.error')
const body = document.querySelector('.body')

async function check(city){
    const api_key = 'ea98dece2d1c92bfdb4d31103b306149';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const data = await fetch(`${url}`).then(response => response.json());
    if(data.cod === `404`) {
        error.style.display="flex";
        body.style.display="none";
        return;
    }
    body.style.display="flex";
    error.style.display="none";
    temp.innerHTML=`${Math.round(data.main.temp - 273.15)}°C`;
    humidity.innerHTML=`${data.main.humidity}%`;
    speed.innerHTML=`${data.wind.speed}Km/H`;
    description.innerHTML=`${data.weather[0].description}`;
    switch (data.weather[0].main){
        case 'Clouds':
            weather_img.src="/Weather app/Clouds.png";
            break;
            
            case 'Clear':
                weather_img.src="/Weather app/Clear.png";
                break;
                
            case 'Mist':
                 weather_img.src="/Weather app/Mist.png";
                break;
                    
             case 'Rain':
                 weather_img.src="/Weather app/Rain.png";
                break;
                        
            case 'Snow':
                weather_img.src="/Weather app/Snow.png";
                break;
                            
            default:
            break;
                 }
                            
            }
                        
        btn.addEventListener('click',()=>{
                            check(input.value);
                        })