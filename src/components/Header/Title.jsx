import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import InputField from '../Common/InputField'

const HeaderTitle = ({
  editable,
  fullName,
  position,
  setFullName,
  setPosition,
}) => {
  const { t } = useTranslation()

  return (
    <div className='cv-header__title'>
      <InputField
        className='cv-header__name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        readOnly={!editable}
        placeholder={t('Full name')}
        autoFocus={true}
      />
      <InputField
        className='cv-header__position'
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        readOnly={!editable}
        placeholder={t('Position')}
      />
    </div>
  )
}

HeaderTitle.propTypes = {
  editable: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
}

export default HeaderTitle
