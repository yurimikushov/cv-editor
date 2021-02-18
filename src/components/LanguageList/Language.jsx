import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import InputField from '../InputField'
import Button from '../Button'

const Language = ({ editable, language, removeLanguage }) => (
  <div className='language' style={{ display: 'flex', alignItems: 'center' }}>
    <InputField
      className='description description_1'
      value={language.title}
      onChange={(e) => language.setTitle(e.target.value)}
      placeholder='Language'
      readOnly={!editable}
    />
    {editable && (
      <Button
        title='x'
        style={{ marginLeft: '5px' }}
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
