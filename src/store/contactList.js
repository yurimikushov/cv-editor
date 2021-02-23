import createContact from './contact'

const createContacts = () => ({
  contacts: [createContact()],
  addContact(title = '', href = '') {
    this.contacts.push(createContact(title, href))
  },
  removeContact(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id)

    if (this.contacts.length === 0) {
      this.contacts.push(createContact())
    }
  },
  setAll(contacts) {
    this.contacts = []

    if (contacts.length === 0) {
      contacts = [createContact()]
    }

    contacts.forEach(({ title, href }) => {
      this.addContact(title, href)
    })
  },
  getAll() {
    return {
      contacts: this.contacts,
    }
  },
})

export default createContacts
