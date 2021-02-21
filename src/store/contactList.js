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
  fillInExample() {
    this.contacts = []
    this.addContact('mikushov.yu@gmail.com', 'mailto:mikushov.yu@gmail.com')
    this.addContact('79999999999', 'tel:79999999999')
    this.addContact('github.com', 'https://github.com/yurimikushov')
    this.addContact('Yoshkar-Ola', 'https://yandex.ru/maps/41/yoshkar-ola')
  },
})

export default createContacts
