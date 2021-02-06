import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({ contacts }) => (
  <div className='contacts item item_1'>
    <div className='title title_3'>Contacts</div>
    {contacts.map((contact) => (
      <Contact key={contact.title} href={contact.href} title={contact.title} />
    ))}
  </div>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactList
