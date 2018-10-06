


  
  
  
  function initMap() {
    console.log("Before");

    var config = {
      apiKey: "AIzaSyDnrfiURYR9Py0VTBPZRdGkVfrVcISPoiI",
      authDomain: "ticketbucket-c1501.firebaseapp.com",
      databaseURL: "https://ticketbucket-c1501.firebaseio.com",
      projectId: "ticketbucket-c1501",
      storageBucket: "ticketbucket-c1501.appspot.com",
      messagingSenderId: "839722162599"
    };
    if(firebase.initializeApp(config)) {
      console.log("done");
    }else{
      console.log("Error");
      }

    console.log("After");
    var myLoc = {
      lat: 6.902,
      lng: 79.861
    };
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        center: myLoc,
        zoom: 14
      }
    );

  
    var markerRef = firebase.database().ref('/position');
  
    markerRef.on('value', function(snapshot) {
        var childs = snapshot.val();
        console.log(childs);
        var marker = new google.maps.Marker({
          position: {
            lat: childs.latitude,
            lng: childs.longitude
          },
          map: map
        });
    });
  
  }
  