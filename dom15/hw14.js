// 1 Найти в коде список ul и добавить класс “list”
const ulElement = document.querySelector('ul')
if (ulElement) {
  ulElement.classList.add('list')
}

// 2 Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const linkElement = document.querySelector('ul ~ a')
if (linkElement) {
  linkElement.id = 'link'
}

// 3 На li через один (начиная с самого первого) установить класс “item”
const collectionLIs = document.getElementsByTagName('li')
let isSetClass = true

for (let el of collectionLIs) {
  if (isSetClass) {
    el.classList.add('item')
  }

  isSetClass = !isSetClass
}

// 4 На все ссылки в примере установить класс “custom-link”
const collectionAs = document.getElementsByTagName('a')
for (let el of collectionAs) {
  el.classList.add('custom-link')
}
