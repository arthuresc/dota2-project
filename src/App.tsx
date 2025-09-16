// import { useState } from 'react'
// import Header from './components/main/Header'
import { Flex, Layout } from 'antd';
import './style/index.css';
import Menu from './components/main/Menu';
import Content from './components/main/Content';
import { ConfigProvider } from "antd"
// import { useRoutes } from 'react-router';
// import routes from './routes/routes';
// import Home from './pages/Home';

const { Header, Footer, Sider, Content: Main } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  minHeight: '10vh',
  height: '5vh',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '50vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#7409d9ff',
};

const siderStyle: React.CSSProperties = {
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#ff1616ff',
};

const layoutStyle: React.CSSProperties = {
  // borderRadius: 8,
  overflow: 'hidden',
};

function App() {
  ConfigProvider.config({
    theme: {
      token: {}
    }
  })
  // const elements = useRoutes(routes)
  return (
    <ConfigProvider>
      <Flex>
        <Layout hasSider style={layoutStyle}>
          <Sider width="15%" style={siderStyle}>
            <Menu></Menu>
          </Sider>
          <Layout>
            <Header style={headerStyle}></Header>
            <Main style={contentStyle}>
              <Content />
            </Main>
          </Layout>
        </Layout>
      </Flex>
    </ConfigProvider>
  );
}

export default App;
