
fetch ("http://api.open-notify.org/iss-now.json")
.then(response => response.json())
.then(json => [json.iss_position.latitude, json.iss_position.longitude])
.then(geo1 => console.log(geo1));

//fetch - > 5s sleep -> fetch