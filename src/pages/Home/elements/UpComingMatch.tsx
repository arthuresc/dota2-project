import React from 'react';
import Icon from '@ant-design/icons';
import PariLogo from '../../../assets/logo_parivision.svg';
import VersusIcon from '../../../assets/vs.svg';
import { Avatar, Badge, Card, Col, Flex, Row, Space } from 'antd';

const cardStyle: React.CSSProperties = {
  width: 150,
};

function UpComingMatch() {
  return (
    // <Flex>
    <Card size="small" style={cardStyle} title="Fissure">
      {/* <Row></Row> */}
      <Row justify="center" align="middle" gutter={[8,8]}>
        <Col span={10}>
          <Badge color='orange' count={`+${5}k`} text="oioioio"
          >
            <Icon
              component={() => <img src={PariLogo} width={40} height={36} />}
            />
          </Badge>
        </Col>
        <Col span={4}>
          <Icon
            component={() => <img src={VersusIcon} width={20} height={20} />}
          />
        </Col>
        <Col span={10}>
          <Icon
            component={() => <img src={PariLogo} width={40} height={36} />}
          />
        </Col>
      </Row>
    </Card>
    // </Flex>
  );
}

export default UpComingMatch;
