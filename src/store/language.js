import { nanoid } from 'nanoid'

const createLanguageStore = (title = '') => ({
  id: nanoid(),
  title,
  setTitle(title) {
    this.title = title
  },
})

export default createLanguageStore
