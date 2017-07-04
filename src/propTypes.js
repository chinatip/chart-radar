import { PropTypes } from 'react'
export const radarChart = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }) ),
  options: PropTypes.shape({
    maxValue: PropTypes.number,
  }),
}