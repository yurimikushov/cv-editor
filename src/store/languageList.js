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
  setAll(languages) {
    this.languages = []

    if (languages.length === 0) {
      languages = [createLanguage()]
    }

    languages.forEach(({ language }) => this.addLanguage(language))
  },
  getAll() {
    return {
      languages: this.languages,
    }
  },
})

export default createLanguageList
