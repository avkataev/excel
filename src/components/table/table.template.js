const CODES = {
  A: 65,
  Z: 90
}

function toCell(content = '') {
  return `<div class='cell' contenteditable spellcheck='false'>${content}</div>`
}
function toColumn(content) {
  return `<div class='column'>${content}</div>`
}
function createRow(content, index = '') {
  return `
    <div class='row'>
      <div class='row-info'>${index}</div>
      <div class='row-data'>${content}</div>
    </div>
  `
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function getCols(colsCount) {
  return new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')
}
function getCells(colsCount) {
  return new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  rows.push(createRow(getCols(colsCount)))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(getCells(colsCount), i + 1))
  }
  return rows.join('')
}
