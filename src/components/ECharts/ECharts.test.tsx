import React from 'react'
import { render } from 'utils/test-utils'
import { ReactEchartsPropsTypes } from 'echarts-for-react'
import { registerEchartsThemes } from 'theme'
import { ECharts } from './ECharts'

const renderECharts = (props: Partial<ReactEchartsPropsTypes> = {}) => {
  const defaultProps: ReactEchartsPropsTypes = {
    option: {
      title: {
        text: 'ECharts'
      },
      tooltip: {},
      legend: {
        data: ['Foo']
      },
      xAxis: {
        data: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth']
      },
      yAxis: {},
      series: [
        {
          name: 'Foo',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  }

  return render(<ECharts {...defaultProps} {...props} />)
}

describe('<ECharts />', () => {
  beforeEach(() => {
    registerEchartsThemes()
  })

  it('renders without crashing', () => {
    renderECharts()
  })
})
