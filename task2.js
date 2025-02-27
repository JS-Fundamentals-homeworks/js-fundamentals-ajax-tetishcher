// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js
document.getElementById("getUserButton").addEventListener("click", function() {
    const userName = document.getElementById("userNameInput").value.trim();
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Response error");
            }
            return response.json();
        })
        .then(users => {
            const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());

            const userCityElement = document.getElementById("userCity");
            if (user) {
                userCityElement.textContent = `City: ${user.address.city}`;
            } else {
                userCityElement.textContent = "User not found";
            }
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});