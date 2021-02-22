const textToHtml = (text) => {
  return text.split(/\r\n|\r|\n/g).join('<br/>')
}

export { textToHtml }
