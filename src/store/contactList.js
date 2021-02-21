import createContact from './contact'

const createContacts = () => ({
  contacts: [createContact()],
  getContacts() {
    return this.contacts
  },
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

    if (contacts.length === 0) {
      contacts = [createContact()]
    }

    contacts.forEach(({ title, href }) => {
      this.addContact(title, href)
    })
  },
})

export default createContacts
