import createLanguageStore from './language'

let exapmleLanguages = [{ title: 'Russian' }, { title: 'English' }]

exapmleLanguages = exapmleLanguages.map((language) =>
  createLanguageStore(language.title)
)

const createLanguageListStore = () => ({
  languages: exapmleLanguages,
  addLanguage() {
    this.languages.push(createLanguageStore())
  },
  removeLanguage(id) {
    this.languages = this.languages.filter((language) => language.id !== id)

    if (this.languages.length === 0) {
      this.languages.push(createLanguageStore())
    }
  },
})

export default createLanguageListStore
