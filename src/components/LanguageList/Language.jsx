import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'

const Language = ({ editable, language, removeLanguage }) => {
  const { t } = useTranslation()

  return (
    <div className='language item i-3'>
      <InputField
        className='language__title title t-5'
        value={language.language}
        onChange={(e) => language.setLanguage(e.target.value)}
        placeholder={t('Language')}
        readOnly={!editable}
        style={{ width: '100%' }}
      />
      {editable && (
        <Button
          className='language__remove-btn'
          title={'\u00D7'}
          onClick={() => removeLanguage(language.id)}
        />
      )}
    </div>
  )
}

Language.propTypes = {
  editable: PropTypes.bool.isRequired,
  language: PropTypes.shape({
    id: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
  }),
  removeLanguage: PropTypes.func.isRequired,
}

export default observer(Language)
