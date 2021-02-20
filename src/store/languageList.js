import createLanguage from './language'

let exapmleLanguages = [{ title: 'Russian' }, { title: 'English' }]

exapmleLanguages = exapmleLanguages.map((language) =>
  createLanguage(language.title)
)

const createLanguageList = () => ({
  languages: exapmleLanguages,
  addLanguage() {
    this.languages.push(createLanguage())
  },
  removeLanguage(id) {
    this.languages = this.languages.filter((language) => language.id !== id)

    if (this.languages.length === 0) {
      this.languages.push(createLanguage())
    }
  },
})

export default createLanguageList
