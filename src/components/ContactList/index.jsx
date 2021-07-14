import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Contact from './Contact'
import AddButton from '../Common/AddButton'
import './index.css'

const ContactList = () => {
  const { appProps, contactList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='contacts item i-1'>
      <div className='contacts__title title t-4 item i-3'>{t('Contacts')}</div>
      {contactList.contacts.map((contact) => (
        <Contact
          key={contact.id}
          editable={appProps.editable}
          contact={contact}
          removeContact={contactList.removeContact}
        />
      ))}
      {appProps.editable && (
        <AddButton onClick={() => contactList.addContact()} />
      )}
    </div>
  )
}

export default observer(ContactList)
