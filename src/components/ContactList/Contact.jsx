import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'

const Contact = ({ editable, contact, removeContact }) => (
  <div className='contact description description_1'>
    {editable && (
      <>
        <InputField
          className='description description_1'
          value={contact.title}
          placeholder='Contact'
          onFocus={() => console.log('link editor opening')}
          onChange={() => {}}
          style={{ width: '100%' }}
        />
        <Button
          className='language__remove-btn'
          title='x'
          onClick={() => removeContact(contact.id)}
        />
      </>
    )}
    {!editable && <a href={contact.href}>{contact.title || 'contact'}</a>}
  </div>
)

Contact.propTypes = {
  editable: PropTypes.bool.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  removeContact: PropTypes.func.isRequired,
}

export default observer(Contact)
