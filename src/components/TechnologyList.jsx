import React from 'react'
import PropTypes from 'prop-types'

const TechnologyList = ({ technologies }) => (
  <div className='technologies item item_1'>
    <div className='title title_3'>Technologies</div>
    <div className='technology description description_1'>{technologies}</div>
  </div>
)

TechnologyList.propTypes = {
  technologies: PropTypes.string.isRequired,
}

export default TechnologyList
