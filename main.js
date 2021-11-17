const api = {
    key: "RGAPI-70bdcf41-8c90-4997-8b37-f4650edd8e46",
    baseurl: "https://developer.riotgames.com/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', actionListener);

function actionListener(evt){
    console.log("HI");
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getName(query){
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
}