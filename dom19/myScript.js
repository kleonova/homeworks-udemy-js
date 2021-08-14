/*
 * 1. В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
 *
 * 2. Количество пользователей может быть любым.
 *
 * 3. Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер.
 *
 * 4. В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице.
 * Что то типа { name: ‘Name’, email: ‘Email’... }
 * соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
 *
 */

const users = [
	{
		"_id": "5d220b10e8265cc978e2586b",
		"isActive": true,
		"balance": 2853.33,
		"age": 20,
		"name": "Buckner Osborne",
		"gender": "male",
		"company": "EMPIRICA",
		"email": "bucknerosborne@empirica.com",
		"phone": "+1 (850) 411-2997",
		"registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
	},
	{
		"_id": "5d220b10144ef972f6c2b332",
		"isActive": true,
		"balance": 1464.63,
		"age": 38,
		"name": "Rosalie Smith",
		"gender": "female",
		"company": "KATAKANA",
		"email": "rosaliesmith@katakana.com",
		"phone": "+1 (943) 463-2496",
		"registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
	},
	{
		"_id": "5d220b1083a0494655cdecf6",
		"isActive": false,
		"balance": 2823.39,
		"age": 40,
		"name": "Estrada Davenport",
		"gender": "male",
		"company": "EBIDCO",
		"email": "estradadavenport@ebidco.com",
		"phone": "+1 (890) 461-2088",
		"registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
	}
]

const tableSchema = {
	name: 'name',
	email: 'email',
	balance: 'balance'
}

class Table {
	constructor() {
		this.amount = 0
	}

	createTable () {
		const tableElement = document.createElement('table')
		tableElement.classList.add('table')

		tableElement.appendChild(this.createHeader())
		tableElement.appendChild(this.createBody())
		tableElement.appendChild(this.createFooter())

		return tableElement
	}

	createHeader () {
		const theadElement = document.createElement('thead')
		const trElement = document.createElement('tr')

		Object.values(tableSchema).forEach(title => {
			trElement.appendChild(this.createHeaderCell(title))
		})

		theadElement.appendChild(trElement)

		return theadElement
	}

	createHeaderCell (title) {
		const thElement = document.createElement('th')
		const createText = document.createTextNode(title)
		thElement.appendChild(createText)

		return thElement
	}

	createBody () {
		const tbodyElement = document.createElement('tbody')

		users.forEach(user => {
			const userTr = new TableRow(user)
			tbodyElement.appendChild(userTr.createTr())

			this.amount += userTr.getBalance()
		})

		return tbodyElement
	}

	createFooter () {
		const tfootElement = document.createElement('tfoot')
		const trElement = document.createElement('tr')
		const tdElement = document.createElement('td')
		tdElement.colSpan = 3
		tdElement.classList.add('text-end')

		const text = document.createTextNode(`total balance ${this.amount}`)
		tdElement.appendChild(text)

		trElement.appendChild(tdElement)
		tfootElement.appendChild(trElement)

		return tfootElement
	}
}

class TableRow {
	constructor({ name, email, balance }) {
		this.name = name
		this.email = email
		this.balance = balance
	}

	getBalance () {
		return this.balance
	}

	createTd(text) {
		const tdElement = document.createElement('td')
		const createText = document.createTextNode(text)
		tdElement.appendChild(createText)

		return tdElement
	}

	createTr () {
		const trElement = document.createElement('tr')

		const nameTdElement = this.createTd(this.name)
		const emailTdElement = this.createTd(this.email)
		const balanceTdElement = this.createTd(this.balance)

		trElement.appendChild(nameTdElement)
		trElement.appendChild(emailTdElement)
		trElement.appendChild(balanceTdElement)

		return trElement
	}
}

const containerElement = document.querySelector('.container')
const tableElement = new Table().createTable()
containerElement.appendChild(tableElement)

