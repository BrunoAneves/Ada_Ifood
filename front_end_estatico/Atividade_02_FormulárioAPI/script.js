document.getElementById('crudForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cargo = document.getElementById('cargo').value;
  const age = document.getElementById('age').value;
  const city = document.getElementById('city').value;


  const apiUrl = 'https://reqres.in/api/users';


  const data = {
    name,
    email,
    cargo,
    age,
    city
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => {
    const tableResult = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = tableResult.insertRow(tableResult.rows.length);

    const rowName = newRow.insertCell(0)
    rowName.innerHTML = data.name

    const rowEmail = newRow.insertCell(1)
    rowEmail.innerHTML = data.email

    const rowCargo = newRow.insertCell(2)
    rowCargo.innerHTML = data.cargo

    const rowAge = newRow.insertCell(3)
    rowAge.innerHTML = data.age

    const rowCity = newRow.insertCell(4)
    rowCity.innerHTML = data.city

    cleanInput()
  }).catch(error => {
    console.error('Erro ao criar usuário', error);
    alert('ERROR')
  })



})


function cleanInput() {
  let nome = document.getElementById('name')
  const email = document.getElementById('email')
  const cargo = document.getElementById('cargo')
  const age = document.getElementById('age')
  const city = document.getElementById('city')
  nome.value = ''
  email.value = ''
  cargo.value = ''
  age.value = ''
  city.value = ''
}



