import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import InputField from '../InputField'

const Language = ({ editable, language }) => (
  <InputField
    className='language description description_1'
    value={language.title}
    onChange={(e) => language.setTitle(e.target.value)}
    placeholder='Language'
    readOnly={!editable}
  />
)

Language.propTypes = {
  editable: PropTypes.bool.isRequired,
  language: PropTypes.shape({
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
  }),
}

export default observer(Language)
