import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import Button from '../Common/Button'
import './index.css'

const Education = ({ editable, education, removeEducation }) => {
  const { t } = useTranslation()

  return (
    <div className='education card card_1 item item_2' data-editable={editable}>
      <InputField
        className='education__degree title title_1'
        value={education.degree}
        onChange={(e) => education.setDegree(e.target.value)}
        placeholder={t('Degree')}
        readOnly={!editable}
      />
      <InputField
        className='education__university title title_2'
        value={education.university}
        onChange={(e) => education.setUniversity(e.target.value)}
        placeholder={t('University')}
        readOnly={!editable}
      />
      <InputField
        className='education__duration title title_5'
        value={education.duration}
        onChange={(e) => education.setDuration(e.target.value)}
        placeholder={t('Education duration')}
        readOnly={!editable}
      />
      {editable && (
        <Button
          className='education__remove-btn'
          title={'\u00D7'}
          onClick={() => removeEducation(education.id)}
        />
      )}
    </div>
  )
}

Education.propTypes = {
  editable: PropTypes.bool.isRequired,
  education: PropTypes.shape({
    id: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    setDegree: PropTypes.func.isRequired,
    setUniversity: PropTypes.func.isRequired,
    setDuration: PropTypes.func.isRequired,
  }),
  removeEducation: PropTypes.func.isRequired,
}

export default observer(Education)
