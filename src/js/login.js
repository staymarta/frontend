FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

//////////////////////////////////Facebook///////////////////////////////////

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

FB.login(function(response){
  // Handle the response object, like in statusChangeCallback() in our demo
  // code.
});

FB.logout(function(response) {
   // Person is now logged out
});

//////////////////////////////////Google//////////////////////////////////////

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
