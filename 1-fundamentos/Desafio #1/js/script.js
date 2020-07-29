const search = document.querySelector("#search");
const submit = document.querySelector("#submit");

const titleUsers = document.querySelector("#titleUsers");
const titleStatistics = document.querySelector("#titleStatistics");

const filteredUsers = document.querySelector("#filteredUsers");
const filteredStatistics = document.querySelector("#filteredStatistics");

async function fetchUsers() {
  // prettier-ignore
  const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
  const json = await res.json();
  const usersAPI = json.results.map((user) => {
    // prettier-ignore
    const {picture, name, dob, gender} = user;
    return {
      picture: picture.medium,
      name: `${name.first} ${name.last}`,
      age: dob.age,
      gender,
    };
  });
  console.log(usersAPI);
  return usersAPI;
}

function filterUsers(results, indice) {
  const users = results.filter((person) => {
    return person.name.toLowerCase().includes(indice.toLowerCase());
  });
  return users;
}

function noLetter(letter) {
  search.addEventListener("keyup", () => {
    if (search.value === "") {
      letter.innerHTML = "";
    }
  });
}

function renderUser(users) {
  let usersHTML = "<div>";
  let countUsers = 0;

  users.forEach((person) => {
    const { name, picture, age } = person;

    const renderHTML = `
    <div class='users'>
      <img src="${picture}" alt="${name}"/>
      <span>${name}, ${age} anos </span><br>
    </div>`;
    usersHTML += renderHTML;
    countUsers += 1;
  });

  usersHTML += "</div>";
  filteredUsers.innerHTML = usersHTML;

  titleUsers.innerHTML = `${countUsers} usuário(s) encontrado(s)`;

  noLetter(titleUsers);

  const notUserFound = document.querySelector("#notUserFound");
  notUserFound.innerHTML = "";
}

function renderStatistic(users) {
  let renderHTML = "<div>";

  let countMale = 0,
    countFemale = 0;
  let sumAge = 0,
    averageAge = 0;

  let countUsers = 0;

  users.forEach((person) => {
    const { age, gender } = person;

    gender === "male" ? (countMale += 1) : (countFemale += 1);

    sumAge += age;
    countUsers += 1;
  });

  averageAge = sumAge / countUsers;
  averageAge = averageAge.toFixed(2);
  renderHTML += `
           <div><p>Sexo Masculino: ${countMale}</p></div>
           <div><p>Sexo Feminino: ${countFemale}</p></div>
           <div><p>Soma das idades: ${sumAge}</p></div>
           <div><p>Média das idades: ${averageAge}</p></div>
      `;

  titleStatistics.innerHTML = "Estatísticas";
  renderHTML += "</div>";
  filteredStatistics.innerHTML = renderHTML;

  noLetter(titleStatistics);

  const notStatisticsFound = document.querySelector("#notStatisticsFound");
  notStatisticsFound.innerHTML = "";
}

function loaded() {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
  });
  search.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (search.value === "") {
      filteredUsers.innerHTML = "";
      filteredStatistics.innerHTML = "";
      const notUserFound = document.querySelector("#notUserFound");
      const notStatisticsFound = document.querySelector("#notStatisticsFound");
      notUserFound.innerHTML = "Nenhum usuário filtrado";
      notStatisticsFound.innerHTML = "Nenhuma estatística";
    } else {
      fetchUsers()
        .then((results) => {
          const users = filterUsers(results, search.value);
          renderUser(users);
          renderStatistic(users);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
loaded();