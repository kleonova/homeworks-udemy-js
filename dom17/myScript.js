/*
 * Реализовать примитивный дропдаун.
 * 1 Изначально все dropdown-menu скрыты через класс .d-none.
 * 2 + При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик.
 * 3 + При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
 * 4 При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.
 */

const hasDisplayNoneClass = (element) => { return element.classList.contains('d-none') }
const isEquals = (firstElement, secondElement) => { return firstElement.isEqualNode(secondElement) }

const [...collectionDropdownItems] = document.querySelectorAll('.dropdown-item')
const [...collectionDropdownMenu] = document.querySelectorAll('.dropdown-menu')

collectionDropdownItems.forEach(elementDropdownItem => {
	elementDropdownItem.addEventListener('click', () => {
		const elementMenu = elementDropdownItem.querySelector('.dropdown-menu')

		if (hasDisplayNoneClass(elementMenu)) {
			elementMenu.classList.remove('d-none')
		} else {
			elementMenu.classList.add('d-none')
		}

		collectionDropdownMenu.forEach(elMenu => {
			if (!isEquals(elementMenu, elMenu) && !hasDisplayNoneClass(elMenu)) {
				elMenu.classList.add('d-none')
			}
		})
	})
})


