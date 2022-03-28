// AJAX stands for Asynchronous JavaScript And XML
// XMLHttpRequest can be used to retrieve any type of data, not just XML

// XMLHTTPRequest.readyState:
// 0 (uninitialized) or (request not initialized)
// 1 (loading) or (server connection established)
// 2 (loaded) or (request received)
// 3 (interactive) or (processing request)
// 4 (complete) or (request finished and response is ready)

// XMLHTTPRequest.status:
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

function load() {
  const request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    const container = document.createElement('div');
    container.className = 'container';

    if (request.readyState == XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        console.log(response);
      } else {
        console.error('There was a problem with the request.');
      }
    } else {
      container.innerHTML = 'Loading...';
    }

    document.getElementsByTagName('body').appendChild(container);
  };

  request.open('GET', 'https://the-cocktail-db.p.rapidapi.com/popular.php');
  request.setRequestHeader('X-RapidAPI-Host', 'the-cocktail-db.p.rapidapi.com');
  request.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
  request.send();
}
