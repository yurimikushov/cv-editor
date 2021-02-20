import { nanoid } from 'nanoid'

const createContact = (title = '', href = '') => ({
  id: nanoid(),
  title,
  href,
  setTitle(title) {
    this.title = title
  },
  setHref(href) {
    this.href = href
  },
})

export default createContact
