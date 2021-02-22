const convertLineBreaks = (str) => str.split(/\r\n|\r|\n/g).join('<br/>')

const convertMdRefs = (str) => {
  const refs = [...str.matchAll(/\[(.*?)\]\((.*?)\)/g)]

  for (const [mdRef, title, href] of refs) {
    str = str.replace(mdRef, `<a href=${href} target='_blank'>${title}</a>`)
  }

  return str
}

const plainTextToHtml = (str) => {
  str = convertLineBreaks(str)
  str = convertMdRefs(str)

  return str
}

export { plainTextToHtml }
