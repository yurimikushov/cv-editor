import React from 'react'
import PropTypes from 'prop-types'
import Language from './Language'

const LanguageList = ({ languages }) => (
  <div className='languages item item_1'>
    <div className='title title_3'>Languages</div>
    {languages.map((language) => (
      <Language key={language.title} title={language.title} />
    ))}
  </div>
)

LanguageList.propTypes = {
  languages: PropTypes.array.isRequired,
}

export default LanguageList
