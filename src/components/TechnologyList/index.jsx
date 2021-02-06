import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TechnologyList = ({ description }) => (
  <article className='technologies'>
    <header className='technologies__title'>Technologies</header>
    <div className='technologies__description'>{description}</div>
  </article>
)

TechnologyList.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TechnologyList
