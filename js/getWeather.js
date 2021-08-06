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




