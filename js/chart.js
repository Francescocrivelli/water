window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      const googleUserId = user.uid;
      getWater(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html'; 
    };
  });
};

const getWater = (userId) => {
  const waterInfo = firebase.database().ref(`users/${userId}`);
  waterInfo.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsInfo(data);
  });
};


 /*
const renderDataAsInfo = (data) => {
  data.forEach((waterLog) => {
    var oneKey = waterLog.key
    var oneValue = waterLog.val();
    console.log(oneValue)
    console.log(oneDate);
   })
};
     */
var waterAmounts = [];
const renderDataAsInfo = (data) => {  
  for(const waterItem in data) {
    const waterConsumption = data[waterItem].percentage;
    console.log(waterConsumption);
    // For each water push it to array
    waterAmounts.push(waterConsumption);
  };
};
 
console.log(waterAmounts);


const labels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];




var data = {
  labels: labels,
  datasets: [{
    label: 'Weekly Water Consumption',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: waterAmounts,
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};



 var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );