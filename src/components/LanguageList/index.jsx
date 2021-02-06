import React from 'react'
import PropTypes from 'prop-types'
import Language from './Language'
import './index.css'

const LanguageList = ({ languages }) => (
  <article className='languages'>
    <header className='languages__title'>Languages</header>
    {languages.map((language) => (
      <Language key={language.title} title={language.title} />
    ))}
  </article>
)

LanguageList.propTypes = {
  languages: PropTypes.array.isRequired,
}

export default LanguageList
