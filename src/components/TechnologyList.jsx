import React from 'react'
import PropTypes from 'prop-types'

const TechnologyList = ({ description }) => (
  <div className='technologies item item_1'>
    <div className='title title_3'>Technologies</div>
    <div className='technology description description_1'>{description}</div>
  </div>
)

TechnologyList.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TechnologyList
