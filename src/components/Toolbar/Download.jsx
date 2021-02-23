import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import { downloadPDF } from '../../utils'
import Button from '../Common/Button'

const Download = () => {
  const { appProps, aboutMe } = useStore()

  const downloadPDFHandler = () => {
    if (appProps.editable) {
      appProps.toggleEditable()
    }

    downloadPDF(`CV. ${aboutMe.fullName}.pdf`, '.cv')
  }

  return (
    <div className='toolbar__download item item_2'>
      <div className='toolbar__download-title title title_3 item item_3'>
        Download
      </div>
      <ul className='toolbar__download-commands'>
        <li className='toolbar__download-pdf item item_3'>
          <Button
            className='toolbar__download-pdf-btn'
            title='PDF'
            onClick={downloadPDFHandler}
            tabIndex='-1'
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(Download)
