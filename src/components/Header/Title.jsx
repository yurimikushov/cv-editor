import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'

const HeaderTitle = ({
  showPreview,
  fullName,
  position,
  setFullName,
  setPosition,
}) => (
  <div className='cv-header__title'>
    <InputField
      className='cv-header__name'
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      readOnly={showPreview}
      placeholder='Full name'
    />
    <InputField
      className='cv-header__position'
      value={position}
      onChange={(e) => setPosition(e.target.value)}
      readOnly={showPreview}
      placeholder='Position'
    />
  </div>
)

HeaderTitle.propTypes = {
  showPreview: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
}

export default HeaderTitle
