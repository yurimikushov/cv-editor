import { nanoid } from 'nanoid'

const createLanguage = (language = '') => ({
  id: nanoid(),
  language,
  setLanguage(language) {
    this.language = language
  },
})

export default createLanguage
