/*
 * 1 По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
 *
 * 2 При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
 * она становится прежнего цвета. Цвет менять можно через добавление класса.
 *
 * 3 При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
 *
 * 4 При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку,
 * т.е Item 3, Item 4 и т.д
 *
 * */
const btnMsg = document.getElementById('btn-msg')

document.body.onclick = (e) => {
	document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName
}

function showMessage () {
	const msg = btnMsg.getAttribute('data-text')
	alert(msg)
}

function handlerMouseHover () {
	btnMsg.classList.add('btn-red')
}

function handlerMouseLeave () {
	btnMsg.classList.remove('btn-red')
}

function generateElementLi () {
	const ulElement = document.querySelector('ul')
	const [...collectionLIs] = document.querySelectorAll('ul > li')

	const newElementLi = document.createElement('li')
	const createLiText = document.createTextNode(`Item ${collectionLIs.length + 1}`)

	newElementLi.appendChild(createLiText)
	ulElement.appendChild(newElementLi)
}
