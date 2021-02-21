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
  loadContacts(contacts) {
    this.contacts = []
    contacts.forEach(({ title, href }) => this.addContact(title, href))
  },
})

export default createContacts
