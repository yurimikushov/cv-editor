import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Button from '../Common/Button'

const EditButton = ({ className }) => {
  const { appProps } = useStore()
  const { t } = useTranslation()

  return (
    <Button
      className={cn('edit-btn', className)}
      title={!appProps.editable ? t('Edit') : t('Preview')}
      onClick={() => appProps.toggleEditable()}
      tabIndex='-1'
    />
  )
}

EditButton.propTypes = {
  className: PropTypes.string,
}

export default observer(EditButton)
