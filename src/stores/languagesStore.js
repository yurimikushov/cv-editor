import { nanoid } from 'nanoid'

const exapmleLanguages = [
  { id: nanoid(), title: 'Russian' },
  { id: nanoid(), title: 'English' },
]

const createLanguagesStore = () => ({
  languages: exapmleLanguages,
  addLanguage(title) {
    this.languages.push({
      id: nanoid(),
      title,
    })
    this.languages = [...this.languages]
  },
  removeLanguage(id) {
    this.languages = this.languages.filter((language) => language.id !== id)
  },
})

export default createLanguagesStore
