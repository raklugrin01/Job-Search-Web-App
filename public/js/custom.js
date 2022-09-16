function sortbys(v) {

  if (v === "2") {
    var jobtitle = "php"
    var place = "nagpur"
    var pagenum=1
    
    data = {jobtitle: jobtitle, place: place,pagenum:pagenum};
    
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    


    // alert(place);

  } else {
    alert("hello from 2....");

  }
}

function xxyyzz(){
  alert("++")
  var jobtitle = "php"
  var place = "nagpur"
  var pagenum=1
  
  data = {jobtitle: jobtitle, place: place,pagenum:pagenum};
  
  fetch("http://localhost:5000/search", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


async function postData(url = 'http://localhost:5000/new', data = {}) {
  // Default options are marked with *
  await fetch(url, {
    method: 'POST', 
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  
}
