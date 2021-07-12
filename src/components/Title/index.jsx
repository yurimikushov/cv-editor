import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { useTranslation } from 'react-i18next'
import InputField from '../Common/InputField'
import './index.css'

const Title = ({ className }) => {
  const {
    appProps: { editable },
    aboutMe: { fullName, position, setFullName, setPosition },
  } = useStore()

  const { t } = useTranslation()

  return (
    <div className={cn(className, 'title')}>
      <InputField
        className='title__name'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        readOnly={!editable}
        placeholder={t('Full name')}
        autoFocus={true}
      />
      <InputField
        className='title__position'
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        readOnly={!editable}
        placeholder={t('Position')}
      />
    </div>
  )
}

Title.propTypes = {
  className: PropTypes.string,
}

export default observer(Title)
