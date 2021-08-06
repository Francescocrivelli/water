# water API
const APIKEY = 'd7782201bb6ec407967c7d4cf2841c60';

const url = `https://api.openweathermap.org/data/2.5/weather?zip=10001,us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;




var getData = function(){
     const url = `https://api.openweathermap.org/data/2.5/weather?zip=${$("#zipCode").val()},us&units=imperial&APPID=d7782201bb6ec407967c7d4cf2841c60`;

fetch(url)
.then(respose =>respose.json())
.then(data => $( "#result" ).text( `${$('#result').text()}${data.name}: ${data.main.temp}`+"\n"));
document.getElementById('result').style.display = "block";
document.getElementById('changeDiv').style.display = "none";


};
console.log(document.getElementById('changeDiv'));
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
