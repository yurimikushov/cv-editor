import createLanguageStore from './language'

let exapmleLanguages = [{ title: 'Russian' }, { title: 'English' }]

exapmleLanguages = exapmleLanguages.map((language) =>
  createLanguageStore(language.title)
)

const createLanguageListStore = () => ({
  languages: exapmleLanguages,
  addLanguage(title) {
    this.languages.push(createLanguageStore(title))
  },
  removeLanguage(id) {
    this.languages = this.languages.filter((language) => language.id !== id)
  },
})

export default createLanguageListStore
