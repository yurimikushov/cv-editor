import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Button from './Button'

const AddButton = ({ onClick, ...props }) => {
  const { t } = useTranslation()

  return (
    <Button
      title={t('Add')}
      onClick={onClick}
      style={{
        display: 'block',
        margin: '5px auto',
      }}
      {...props}
    />
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddButton
