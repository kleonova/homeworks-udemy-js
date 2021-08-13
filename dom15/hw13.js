// 1 Найти параграф и получить его текстовое содержимое (только текст!)
const collectionParagraphs = document.getElementsByTagName('p')
const firstParagraph = collectionParagraphs[0]
const firstParagraphText = firstParagraph?.innerText
console.log(firstParagraphText)

// 2 Создать функцию, которая принимает в качестве аргумента узел DOM
// и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function getInfoAboutNode(element) {
  const { nodeName: name, nodeType: type, children = 0 } = element

  return {
    name,
    type,
    children,
  }
}

const infoAboutNode = getInfoAboutNode(firstParagraph)
console.log(infoAboutNode)

// 3 Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFromUl(ul) {
  const arrayResult = []
  const { children: collectionLi } = ul

  for (let el of collectionLi) {
    arrayResult.push(el.textContent)
  }

  return arrayResult
}

const collectionUls = document.getElementsByTagName('ul')
const firstUl = collectionUls[0]
const collectionTextFromUl = getTextFromUl(firstUl)
console.log(collectionTextFromUl)

// 4 В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться)
function changeText(element, temp) {
  const { childNodes } = element
  for (let childEl of childNodes) {
    if (childEl.nodeType === 3) {
      childEl.nodeValue = temp
    }
  }
}

changeText(firstParagraph, '-text-')
