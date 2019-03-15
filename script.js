function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
   async function demo() {
    fetch ("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(json => json.iss_position.latitude)
    .then(lat1 => console.log(lat1))
    await sleep(5000);
    fetch ("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(json => json.iss_position.latitude)
    .then(lat2 => console.log(lat2))
   }
   demo ();
   async function demo2() {
    fetch ("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(json => json.iss_position.longitude)
    .then(lon1 => console.log(lon1));
    await sleep(5000);
    fetch ("http://api.open-notify.org/iss-now.json")
    .then(response => response.json())
    .then(json => json.iss_position.longitude)
    .then(lon2 => console.log(lon2))
   }
   demo2();

  function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}
distance();


// fetch ("http://api.open-notify.org/iss-now.json")
// .then(response => response.json())
// .then(json => [json.iss_position.latitude, json.iss_position.longitude])
// .then(geo1 => console.log(geo1));
// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
//   }
// sleep(5000)
// .then (fetch ("http://api.open-notify.org/iss-now.json")
// .then(response => response.json())
// .then(json => [json.iss_position.latitude, json.iss_position.longitude])
// .then(geo2 => console.log(geo2)));
