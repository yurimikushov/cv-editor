import createContact from './contact'

let exapmleContacts = [
  { title: 'email', href: '#' },
  { title: 'telephone', href: '#' },
  { title: 'github.com', href: '#' },
  { title: 'location', href: '#' },
]

exapmleContacts = exapmleContacts.map((contact) =>
  createContact(contact.title, contact.href)
)

const createContactsStore = () => ({
  contacts: exapmleContacts,
  addContact() {
    this.contacts.push(createContact())
  },
  removeContact(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id)

    if (this.contacts.length === 0) {
      this.contacts.push(createContact())
    }
  },
})

export default createContactsStore
