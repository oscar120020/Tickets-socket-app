import { Layout, Menu } from "antd";
import React, { useContext } from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { GetIn } from "./GetIn";
import { Cola } from "./Cola";
import { Createticket } from "./Createticket";
import { Desktop } from "./Desktop";
import { UIContext, UIProvider } from "../context/UIContext";

const { Sider, Content } = Layout;

export const RouterApp = () => {

  const { showMenu } = useContext(UIContext)

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider hidden={!showMenu}  collapsedWidth="50" breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/ingresar">Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/cola">Cola</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crear-ticket">Crear Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/escritorio" element={<Desktop />} />
              <Route index path="/ingresar" element={<GetIn />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear-ticket" element={<Createticket />} />
              <Route path="*" element={<Navigate to="/ingresar" />} />

            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
