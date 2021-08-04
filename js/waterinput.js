let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleWaterSubmit = () => {
  // 1. Capture the form data
  console.log('hi')
  const input = document.querySelector("#userAmount");
  console.log(input)
  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}`).push({
    amount: input.value
  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    input.value = "";
  });
};