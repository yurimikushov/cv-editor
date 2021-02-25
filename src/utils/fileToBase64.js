const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', (e) => resolve(e.target.result))
    reader.readAsDataURL(file)
  })
}

export { fileToBase64 }
