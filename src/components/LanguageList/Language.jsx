import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'

const Language = ({ editable, language, removeLanguage }) => (
  <div className='language'>
    <InputField
      className='language__title description description_1'
      value={language.title}
      onChange={(e) => language.setTitle(e.target.value)}
      placeholder='Language'
      readOnly={!editable}
      style={{ width: '100%' }}
    />
    {editable && (
      <Button
        className='language__remove-btn'
        title='x'
        onClick={() => removeLanguage(language.id)}
      />
    )}
  </div>
)

Language.propTypes = {
  editable: PropTypes.bool.isRequired,
  language: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
  }),
  removeLanguage: PropTypes.func.isRequired,
}

export default observer(Language)
