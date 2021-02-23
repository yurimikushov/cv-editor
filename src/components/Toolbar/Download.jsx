import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { downloadPDF } from '../../utils'
import Button from '../Common/Button'

const Download = () => {
  const { appProps, aboutMe } = useStore()
  const { t } = useTranslation()

  const downloadPDFHandler = () => {
    if (appProps.editable) {
      appProps.toggleEditable()
    }

    downloadPDF(`CV. ${aboutMe.fullName}`, '.cv')
  }

  return (
    <div className='toolbar__download item item_2'>
      <div className='toolbar__download-title title title_3 item item_3'>
        {t('Download')}
      </div>
      <ul className='toolbar__download-actions'>
        <li className='toolbar__download-pdf item item_3'>
          <Button
            className='toolbar__download-pdf-btn'
            title={t('PDF')}
            onClick={downloadPDFHandler}
            tabIndex='-1'
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(Download)
