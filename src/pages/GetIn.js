import React from "react";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import {useNavigate } from 'react-router-dom'
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography

export const GetIn = () => {

   const navigate = useNavigate () 

   useHideMenu(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/escritorio")
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <>
        <Title level={2}>Ingresar</Title>
        <Text>Ingrese su nombre y escritorio</Text>
        <Divider></Divider>
        <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Nombre del agente"
            name="agente"
            rules={[{ required: true, message: "Por favor ingrese su nombre" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Escritorio"
            name="escritorio"
            rules={[{ required: true, message: "Por favor ingrese su escritorio" }]}
        >
            <InputNumber/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
            <Button type="primary" htmlType="submit" shape="round">
                <SaveOutlined/>
                Ingresar
            </Button>
        </Form.Item>
        </Form>
      </>
  );
};
