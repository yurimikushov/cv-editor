import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'

const Contact = ({ editable, contact, removeContact }) => {
  const { t } = useTranslation()

  return (
    <div className='contact card card_2 item item_3' data-editable={editable}>
      {editable ? (
        <>
          <InputField
            className='contact__title title title_4'
            value={contact.title}
            placeholder={t('Text')}
            onChange={(e) => contact.setTitle(e.target.value)}
          />
          <InputField
            className='contact__href title title_4'
            value={contact.href}
            placeholder={t('Ref')}
            onChange={(e) => contact.setHref(e.target.value)}
          />
          <Button
            className='contact__remove-btn'
            title={'\u00D7'}
            onClick={() => removeContact(contact.id)}
          />
        </>
      ) : (
        <a
          className='contact__title title title_4'
          href={contact.href}
          target='_blank'
          rel='noreferrer'
        >
          {contact.title || t('Contact')}
        </a>
      )}
    </div>
  )
}

Contact.propTypes = {
  editable: PropTypes.bool.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setHref: PropTypes.func.isRequired,
  }),
  removeContact: PropTypes.func.isRequired,
}

export default observer(Contact)
