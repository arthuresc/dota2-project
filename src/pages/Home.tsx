import { Card, Col, Row } from 'antd';
import Icon from '@ant-design/icons';
import PariLogo from '../assets/logo_parivision.svg';
function Home() {
  return (
    <Row>
      <Col span={24}>
        <Card></Card>
      </Col>
      <Col span={16}>
        <Card
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
