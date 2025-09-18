import { Card, Col, Row, Space } from 'antd';
import Icon from '@ant-design/icons';
import PariLogo from '../../assets/logo_parivision.svg';
import React from 'react';
import UpComingMatch from './elements/UpComingMatch';

const spaceStyle: React.CSSProperties = {
  minWidth: '100%',
};
function Home() {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        {/* <Card></Card> */}
        <UpComingMatch/>
      </Col>
      <Col span={16}>
        <Card
          style={{ textAlign: 'left' }}
          title={
            <>
              <Icon
                component={() => <img src={PariLogo} width={24} height={24} />}
              />
              Piiiiza
            </>
          }
        >
          {
            <Icon
              component={() => <img src={PariLogo} width={24} height={24} />}
            />
          }
        </Card>
      </Col>
      <Col span={8}>
        <Card></Card>
      </Col>
    </Row>
  );
}

export default Home;
