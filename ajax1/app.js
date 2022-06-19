/*
* Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com.
* Получив ответ от сервера вывести имена пользователей на страницу.
* При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем.
* */

// Custom Http Module
function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    };
}
// Init http module
const http = customHttp();

const usersService = (function () {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    return {
        get(cb) {
            http.get(`${apiUrl}`, cb);
        },
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    usersService.get(onGetResponse)
});

function onGetResponse(error, response) {
    if (error) {
        console.error(error);
        return;
    }

    renderUserList(response);
}

function renderUserList(users) {
    const userContainer = document.getElementById("users");

    users.forEach(user => {
        console.log(user)
        const el = userTemplate(user);
        el.addEventListener("click", event => {
            renderUserInfo(user);
        })
        userContainer.appendChild(el);
    })
}

function userTemplate(user) {
    const userElement = document.createElement('li');
    userElement.appendChild(document.createTextNode(user.name))
    return userElement;
}

function renderUserInfo(user) {
    const userInfoContainer = document.getElementById('userInfo');
    userInfoContainer.innerHTML = '';

    userInfoContainer.insertAdjacentHTML('afterbegin', userInfoTemplate(user));
}

function userInfoTemplate({ name, email, website }) {
    return `
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${email}</p>
            <p class="card-text">${website}</p>
          </div>
        </div>
  `;
}