import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppProps, useAboutMe } from '../../store'
import { downloadPDF } from '../../utils'
import Button from '../Common/Button'

const Download = () => {
  const { editable, toggleEditable } = useAppProps()
  const { fullName } = useAboutMe()

  const downloadPDFHandler = () => {
    if (editable) {
      toggleEditable()
    }

    downloadPDF(`CV. ${fullName}.pdf`, '.cv')
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
          />
        </li>
        <li className='toolbar__download-html item item_3'>
          <Button
            className='toolbar__download-html-btn'
            title='HTML'
            onClick={() => alert('Not implemented yet')}
          />
        </li>
        <li className='toolbar__download-json item item_3'>
          <Button
            className='toolbar__download-json-btn'
            title='JSON'
            onClick={() => alert('Not implemented yet')}
          />
        </li>
      </ul>
    </div>
  )
}

export default observer(Download)
