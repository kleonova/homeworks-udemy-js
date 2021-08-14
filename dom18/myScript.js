/*
1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка.
ВАЖНО, только дочерние относительно блока на который навели мышь.

Вот массив (список) рандомных цветов
['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

2. Возращаете фон обратно когда пользователь уводит мышку с блока.

3. Добавление фона из первой части задания сделать с задержкой в 200мс.
Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего.
Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.
 */

const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown']
let timer = 200

const [...collectionBox] = document.querySelectorAll('.box')
const getChild = (element, commonArrChild) => {
	const arrChild = [...element.children]

	if (arrChild) {
		commonArrChild.push(...arrChild)
		arrChild.forEach(child => {
			getChild(child, commonArrChild)
		})
	}
	return commonArrChild
}

collectionBox.forEach(elementBox => {
	let child = getChild(elementBox, [])

	elementBox.addEventListener("mouseenter", function( event ) {
		child.forEach((el, elInd) => {
			const timeOut = (elInd + 1) * timer
			setTimeout(() => {
				el.style.backgroundColor = colors[elInd]
			}, timeOut);
		})

	}, false);

	elementBox.addEventListener("mouseover", function( event ) {
		child.forEach((el, elInd) => {
			const timeOut = (elInd + 1) * timer
			setTimeout(() => {
				el.style.backgroundColor = ''
			}, timeOut);
		})
	}, false);
})
