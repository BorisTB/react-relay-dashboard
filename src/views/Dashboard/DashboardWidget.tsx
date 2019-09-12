import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import { EChartOption } from 'echarts'
import { ECharts } from 'components'

interface DashboardWidgetProps {
  children?: React.ReactNode
  chartOption?: EChartOption
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  children,
  chartOption
}) => (
  <Grid item xs={12} sm={6} md>
    <Card>
      <CardContent>
        {children}
        {chartOption && (
          <ECharts style={{ height: '130px' }} option={chartOption} />
        )}
      </CardContent>
    </Card>
  </Grid>
)

export { DashboardWidget }
