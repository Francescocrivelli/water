const APIKEY = 'd7782201bb6ec407967c7d4cf2841c60';
const url = `https://api.openweathermap.org/data/2.5/weather?zip=10001,us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;


//store zip from div
//


var getData = function(){
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${$("#zipCode").val()},us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;
fetch(url)
.then(respose =>respose.json())
.then(data=> {
      temp = parseInt(data.main.temp)
      $( "#result" ).text( `${$('#result').text()}${data.name}: ${data.main.temp}`+"\n")    
     console.log(temp); //Temp = good only inside .then
     if (temp>80){
         var wModal = document.querySelector("#weatherModal")
         wModal.style.display = "block";
     }
    

    }) //.then close (Everything outside wont be considered)

result.style.display = "block";
changeDiv.style.display = "none";

}
function closeWeatherModal()
{
    var wModal= document.querySelector("#weatherModal")
    wModal.style.display = "none";
}




<<<<<<< HEAD



// const alpha = require('alphavantage')({ key: 'myapikey' });

// // Declare variable
// let polishedData;

// // Get API data
// alpha.data.daily('msft', 'compact')
// .then(data => {polishedData = alpha.util.polish(data)['data']});

// console.log(polishedData); // returns undefined




// console.log(document.getElementById('changeDiv'));
// submitButton.addEventListener("click", (e) => {
//   let myKey = 'YOUR_API_KEY_HERE';
//   let topic = queryField.value;
//   let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}+kitten`;
//   console.log(myQuery);
//   fetch(myQuery)
//     .then(response => response.json()) // read JSON response
//     .then(myjson => {
//       code to execute once JSON response is available
//       let i = getRandom(10);
//       let imgurl = myjson.data[i].images.downsized.url;
//       console.log(imgurl);
//       imageHolderDiv.innerHTML = `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML
//     })
//     .catch(error => {
//       console.log(error); // Log error if there is one
//     })
// })
=======
>>>>>>> fff5911e6efaa9c87a56c64491723d0e1944467d
