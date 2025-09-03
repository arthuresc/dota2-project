import React from 'react'
import { Card } from 'antd';

type Props = {}

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center'
}

function UpcomingMatches({}: Props) {
  return (
    <Card>
      <Card.Grid style={gridStyle}>
        Content
      </Card.Grid>
    </Card>
  )
}

export default UpcomingMatches