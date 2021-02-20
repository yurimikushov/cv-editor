import { nanoid } from 'nanoid'

const createLanguage = (title = '') => ({
  id: nanoid(),
  title,
  setTitle(title) {
    this.title = title
  },
})

export default createLanguage
