var positions = [];

//create class Position
//members latitude, longitude
//initialize array of objects of class Position

var makeRequest = function(positions)
{
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.open-notify.org/iss-now.json', true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      console.log(data.iss_position);
      console.log(typeof(data.iss_position));
      //positions.push(data.iss_position);
      console.log(positions[0]);
      //data.iss_position;
    } else {
      // We reached our target server, but it returned an error
  
    }
  };
  
  request.onerror = function() {
    // There was a connection error of some sort
  };
  
  request.send();
}

makeRequest(positions);

console.log(positions);

//var data;
// function dataLL()
// {
  // fetch ("http://api.open-notify.org/iss-now.json")
// .then(response => response.json())
// .then(json => console.log(json));

  // data.iss_position.latitude.longitude
// }
// dataLL();
//fetch -> save l/l [0]


//sleep for 5s - "wait"
//fetch -> save l/l [1]

//calculate speed
//calculate path - speed * time