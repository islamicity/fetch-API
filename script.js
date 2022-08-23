fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>console.log(response))

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://qris.id/api-doc/create-invoice.php')
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://qris.id/restapi/qris/checkpaid_qris.php')
  .then(response => response.json())
  .then(json => console.log(json))
  