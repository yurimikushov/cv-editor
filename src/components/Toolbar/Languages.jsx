import React, { useEffect } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import Button from '../Common/Button'

const Languages = () => {
  const { appProps } = useStore()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(appProps.lang)
  }, [i18n, appProps.lang])

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    appProps.setLang(lang)
  }

  return (
    <div className='toolbar__languages item item_2'>
      <span className='toolbar__languages-title title title_3 item item_3'>
        {t('Languages')}
      </span>
      <ul className='toolbar__languages-actions'>
        <li className='toolbar__language item item_3'>
          <Button
            className={cn('toolbar__language-btn', {
              'active-btn': appProps.lang === 'en',
            })}
            title={t('EN')}
            onClick={() => changeLanguage('en')}
            tabIndex='-1'
          />
        </li>
        <li className='toolbar__language item item_3'>
          <Button
            className={cn('toolbar__language-btn', {
              'active-btn': appProps.lang === 'ru',
            })}
            title={t('RU')}
            onClick={() => changeLanguage('ru')}
            tabIndex='-1'
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(Languages)
