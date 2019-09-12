import React from 'react'
import ReactEcharts, { ReactEchartsPropsTypes } from 'echarts-for-react'

const ECharts: React.FC<ReactEchartsPropsTypes> = (props) => (
  <ReactEcharts theme='echartsThemeLight' {...props} />
)

export { ECharts }
