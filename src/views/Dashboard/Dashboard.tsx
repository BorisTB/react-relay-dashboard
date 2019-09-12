import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import {
  Page,
  PageSection,
  PageSectionContent,
  PageSectionTitle
} from 'components'
import Item from './DashboardItem'

const Dashboard: React.FC = () => {
  return (
    <Page>
      <PageSection>
        <PageSectionTitle>Widgets</PageSectionTitle>

        <PageSectionContent>
          <Grid container spacing={2}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Grid>
        </PageSectionContent>
      </PageSection>

      <PageSection flex={1}>
        <PageSectionTitle>Recent Data</PageSectionTitle>

        <PageSectionContent flex={1}>
          <Card>
            <CardContent>test</CardContent>
          </Card>
        </PageSectionContent>
      </PageSection>
    </Page>
  )
}

export default Dashboard
