import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Contact from './Contact'
import Button from '../Common/Button'
import './index.css'

const ContactList = () => {
  const { appProps, contactList } = useStore()
  const { t } = useTranslation()

  return (
    <div className='contacts item item_1'>
      <div className='contacts__title title t-4 item item_3'>
        {t('Contacts')}
      </div>
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
          title={t('Add')}
          onClick={() => contactList.addContact()}
        />
      )}
    </div>
  )
}

export default observer(ContactList)
