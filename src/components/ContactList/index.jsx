import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import './index.css'

const ContactList = ({ contacts }) => (
  <div className='contacts'>
    <header className='contacts__title'>Contacts</header>
    {contacts.map((contact) => (
      <Contact key={contact.title} href={contact.href} title={contact.title} />
    ))}
  </div>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactList
