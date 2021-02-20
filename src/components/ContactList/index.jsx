import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useContactList } from '../../store'
import Contact from './Contact'
import Button from '../Common/Button'
import './index.css'

const ContactList = () => {
  const { editable } = useAppProps()
  const { contacts, addContact, removeContact } = useContactList()

  return (
    <div className='contacts item item_1'>
      <div className='title title_3'>Contacts</div>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          editable={editable}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
      {editable && (
        <Button
          className='languages__add-btn'
          title='Add'
          onClick={addContact}
        />
      )}
    </div>
  )
}

export default observer(ContactList)
