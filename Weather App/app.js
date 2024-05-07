console.log("Hello jii");

const API_KEY = "90ec71a497705d4843e7148119d8a514";


async function showWeather(){
    // let latitude = 15.333;
    // let longitude = 74.45554;
    let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    console.log("weather data : " , data);

    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

    console.log(newPara);
    document.body.appendChild(newPara);
}


// 90ec71a497705d4843e7148119d8a514