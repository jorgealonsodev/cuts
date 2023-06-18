// Extraer los datos de una API en json
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


//Extraer solo uno de los elementos, filtrando por uno de los campos
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const resultados = data.filter(elemento => elemento.id === 2);
        console.log(resultados);
    })
    .catch(error => console.log(error));


//Ver todos los ID o cualqueir campo que queramos

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const ids = data.map(elemento => elemento.id);
    console.log(ids);
  })
  .catch(error => console.log(error));


// Meter todos los datos en un array

const resultados = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    resultados.push(...data); // Agregar los elementos al array
    console.log(resultados); // Mostrar el array con los elementos
  })
  .catch(error => console.log(error));


