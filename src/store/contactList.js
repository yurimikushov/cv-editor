import { nanoid } from 'nanoid'

const exapmleContacts = [
  { id: nanoid(), title: 'email', href: '/' },
  { id: nanoid(), title: 'telephone', href: '/' },
  { id: nanoid(), title: 'github.com', href: '/' },
  { id: nanoid(), title: 'location', href: '/' },
]

const createContactsStore = () => ({
  contacts: exapmleContacts,
  addContact(title, href) {
    this.contacts.push({
      id: nanoid(),
      title,
      href,
    })
    this.contacts = [...this.contacts]
  },
  removeContact(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id)
  },
})

export default createContactsStore
