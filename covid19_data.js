//Get Covid19 Data
var request = new XMLHttpRequest();
request.open('GET', 'https://api.covid19api.com/summary', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    //console.log(data);
    console.log("Country", "TotalConfirmed", "TotalRecovered", "TotalDeaths", "NewConfirmed", "NewRecovered", "NewDeaths")
    for (var i = 0; i < 192; i++) {

        console.log(data.Countries[i].Country, data.Countries[i].TotalConfirmed, data.Countries[i].TotalRecovered, data.Countries[i].TotalDeaths, data.Countries[i].NewConfirmed, data.Countries[i].NewRecovered, data.Countries[i].NewDeaths)
    }

}

