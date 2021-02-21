import createLanguage from './language'

const createLanguageList = () => ({
  languages: [createLanguage()],
  addLanguage(language = '') {
    this.languages.push(createLanguage(language))
  },
  removeLanguage(id) {
    this.languages = this.languages.filter((language) => language.id !== id)

    if (this.languages.length === 0) {
      this.languages.push(createLanguage())
    }
  },
  fillInExample() {
    this.languages = []
    this.addLanguage('Russian')
    this.addLanguage('English')
  },
})

export default createLanguageList
