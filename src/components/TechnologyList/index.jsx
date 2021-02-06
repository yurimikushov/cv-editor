import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TechnologyList = ({ description }) => (
  <div className='technologies'>
    <header className='technologies__title'>Technologies</header>
    <div className='technologies__description'>{description}</div>
  </div>
)

TechnologyList.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TechnologyList
