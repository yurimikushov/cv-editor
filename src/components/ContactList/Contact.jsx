import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'

const Contact = ({ editable, contact, removeContact }) => (
  <div className='contact card card_2 item item_3' data-editable={editable}>
    {editable && (
      <>
        <InputField
          className='contact__title description description_1'
          value={contact.title}
          placeholder='Title'
          onChange={(e) => contact.setTitle(e.target.value)}
        />
        <InputField
          className='contact__href description description_1'
          value={contact.href}
          placeholder='Link'
          onChange={(e) => contact.setHref(e.target.value)}
        />
        <Button
          className='contact__remove-btn'
          title='x'
          onClick={() => removeContact(contact.id)}
        />
      </>
    )}
    {!editable && (
      <a
        className='contact__title description description_1'
        href={contact.href}
        target='_blank'
        rel='noreferrer'
      >
        {contact.title || 'Contact'}
      </a>
    )}
  </div>
)

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
