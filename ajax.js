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
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        container.innerHTML = '';

        response.data.forEach(({ fact }, index) => {
          const factElement = document.createElement('div');
          factElement.innerHTML = index + 1 + '. ' + fact;
          container.appendChild(factElement);
        });
      } else {
        console.error(request.response.error);
        container.innerHTML = 'There was a problem with the request.';
      }
    } else {
      container.innerHTML = 'Loading...';
    }
  };

  request.open('GET', 'https://catfact.ninja/facts');
  request.send();
}
