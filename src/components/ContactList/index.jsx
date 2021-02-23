import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Contact from './Contact'
import Button from '../Common/Button'
import './index.css'

const ContactList = () => {
  const { appProps, contactList } = useStore()

  return (
    <div className='contacts item item_1'>
      <div className='contacts__title title title_3 item item_3'>Contacts</div>
      {contactList.contacts.map((contact) => (
        <Contact
          key={contact.id}
          editable={appProps.editable}
          contact={contact}
          removeContact={contactList.removeContact}
        />
      ))}
      {appProps.editable && (
        <Button
          className='contacts__add-btn flex-center-center'
          title='Add'
          onClick={() => contactList.addContact()}
        />
      )}
    </div>
  )
}

export default observer(ContactList)
