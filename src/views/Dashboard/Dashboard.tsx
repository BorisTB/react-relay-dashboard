import React from 'react'
import { Grid } from '@material-ui/core'
import { EChartOption } from 'echarts'
import {
  Page,
  PageSection,
  PageSectionContent,
  PageSectionTitle,
  Table
} from 'components'
import { DashboardWidget } from './DashboardWidget'
import data from 'mock/usersMock'

const option: EChartOption = {
  title: {
    left: 'center',
    top: 20
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  visualMap: [
    {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    }
  ],
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Dogs' },
        { value: 310, name: 'Cats' },
        { value: 274, name: 'Birds' },
        { value: 235, name: 'Lizards' },
        { value: 400, name: 'Fish' }
      ].sort((a, b) => a.value - b.value),
      roseType: 'radius',
      labelLine: {
        normal: {
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          color: '#c23531',
          shadowBlur: 40,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: () => Math.random() * 200
    }
  ]
}

const Dashboard: React.FC = () => {
  return (
    <Page>
      <PageSection>
        <PageSectionTitle>Widgets</PageSectionTitle>

        <PageSectionContent>
          <Grid container spacing={2}>
            <DashboardWidget chartOption={option} />
            <DashboardWidget chartOption={option} />
            <DashboardWidget chartOption={option} />
            <DashboardWidget chartOption={option} />
          </Grid>
        </PageSectionContent>
      </PageSection>

      <PageSection flex={1}>
        <PageSectionTitle>Recent Data</PageSectionTitle>

        <PageSectionContent flex={1}>
          <Grid item xs={12}>
            <Table
              columns={[
                { field: 'firstName', title: 'First name' },
                { field: 'lastName', title: 'Last name' },
                { field: 'email', title: 'Email' },
                { field: 'animal', title: 'Animal' },
                { field: 'city', title: 'City' }
              ]}
              data={data}
              options={{ showTitle: false }}
            />
          </Grid>
        </PageSectionContent>
      </PageSection>
    </Page>
  )
}

export default Dashboard
