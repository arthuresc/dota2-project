import { Card, Col, Row } from 'antd';

function Home() {
  return (
    <Row>
      <Col span={24}>
        <Card></Card>
      </Col>
      <Col span={16}>
        <Card></Card>
      </Col>
      <Col span={8}>
        <Card></Card>
      </Col>
    </Row>
  );
}

export default Home;
