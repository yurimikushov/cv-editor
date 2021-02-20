import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InputField from '../InputField'
import Button from '../Button'
import './index.css'

const LinkEditor = ({
  title: defaultTitle,
  href: defaultHref,
  onSave,
  onClose,
}) => {
  const [title, setTitle] = useState(defaultTitle)
  const [href, setHref] = useState(defaultHref)

  useEffect(() => {
    const editorBg = document.createElement('div')

    editorBg.className = 'link-editor__background'

    editorBg.addEventListener('click', () => {
      onClose()
    })

    document.querySelector('.app').append(editorBg)

    return () => editorBg.remove()
  }, [onClose])

  const onSaveHandler = () => {
    onSave(title, href)
    onClose()
  }

  return (
    <div className='link-editor'>
      <InputField
        className='link-editor__title'
        value={title}
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        autoFocus={true}
      />
      <InputField
        className='link-editor__href'
        value={href}
        placeholder='Link'
        onChange={(e) => setHref(e.target.value)}
      />
      <Button
        className='link-editor__save-btn'
        title='Save'
        onClick={onSaveHandler}
      />
    </div>
  )
}

LinkEditor.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LinkEditor
