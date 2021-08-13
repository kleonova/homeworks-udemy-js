/*
1 Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

<ul>
	<li><a href="#">Link1</a></li>
	...
	<li class=”new-item”>item 5</li>
	<li class=”new-item”>item 6</li>
</ul>

Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
*/
const ulElement = document.querySelector('ul')
const currentLength = ulElement.children.length
const countAddedLI = 4

for (let i = 0; i < countAddedLI; i++) {
  const createAText = document.createTextNode(`item ${currentLength + i + 1}`)

  const newLiElement = document.createElement('li')
  newLiElement.appendChild(createAText)
  newLiElement.classList.add('new-item')

  ulElement.appendChild(newLiElement)
}

// 2 В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
const [...collectionAs] = document.querySelectorAll('ul a')

collectionAs.forEach((elementA) => {
  const textA = elementA.innerText
  const oldValue = elementA.childNodes[0]

  const newStrongElement = document.createElement('strong')
  newStrongElement.innerText = textA

  elementA.replaceChild(newStrongElement, oldValue)
})

// 3 В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const newImgElement = document.createElement('img')
newImgElement.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
newImgElement.setAttribute('alt', 'first img')
document.querySelector('body').prepend(newImgElement)

// 4 Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const markElement = document.querySelector('mark')
markElement.innerText = markElement.innerText + ' green'
markElement.classList.add('green')

// 5 Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const [...collectionLIs] = document.querySelectorAll('ul > li')
ulElement.innerHTML = ''
const sortedCollectionLIs = collectionLIs.sort((a, b) => {
  return a.innerText <= b.innerText ? 1 : -1
})

sortedCollectionLIs.forEach((elementLI) => {
  ulElement.appendChild(elementLI)
})
