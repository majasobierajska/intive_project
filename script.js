var request = new XMLHttpRequest();
  request.open('GET', 'http://api.open-notify.org/iss-now.json', true);
  
  request.onload = function()
  {
    if (request.status >= 200 && request.status < 400)
    {
      // Success!
      var data = JSON.parse(request.responseText);
      console.log(data.iss_position);

    }
    else
    {
      console.log('error');
  
    }
};
  request.onerror = function()
  {
    // There was a connection error of some sort
  };
  
request.send();
//fetch ("http://api.open-notify.org/iss-now.json")
//.then(response => response.json())
//.then(json => console.log(json));