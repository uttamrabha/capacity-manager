import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Space } from 'antd';
import DemoForm from "./DemoForm";
import DemoCalender from "./DemoCalender";
import logo from './images/logo.svg'
import headerLogo from './images/GMP_Logo.png'
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
//   backgroundColor: "#44db60",
};
const contentStyle = {
  textAlign: "left",
  minHeight: 800,
  lineHeight: "120px",
  color: "#fff",
  padding: '40px'
//   backgroundColor: "#44db60",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#2ed14f",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
//   backgroundColor: "#44db60",
};
const DemoTest = () => {
  let navigate = useNavigate();
  const redirectToForm = () => {
    navigate("/form");
  };
  const redirectToCalender = () => {
    navigate("/calender");
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[30, 70]}
    >
      <Layout>
        <Sider style={siderStyle}>
            <img src={'https://tenant-logo-gmp-prod.s3.amazonaws.com/logo.png'}height={70} width={200} padding={50} alt="header"/>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            Welcome To Get My Parking
          </Header>
          <Content style={contentStyle}>
            <DemoForm/>
          </Content>
          <Footer style={footerStyle}>
          </Footer>
        </Layout>
      </Layout>
    </Space>
  );
};

export default DemoTest;
