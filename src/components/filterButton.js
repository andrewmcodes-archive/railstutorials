import PropTypes from 'prop-types'
import React, { SyntheticEvent } from 'react'

const FilterButton = ({ text, active }) => (
  <button
    className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
    active={active}
  >
    {text}
  </button>
)

FilterButton.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
}

FilterButton.defaultProps = {
  text: ``,
  active: false,
}

export default FilterButton
