import { Button, Col, Divider, Row, Typography, List, Card, Tag } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { getTickets } from "../helpers/getTickets";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Cola = () => {
  useHideMenu(true);

  const {socket} = useContext(SocketContext)
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    socket.on("ticket-asignado", (tickets) => {
      setTickets(tickets);
    })
  }, [socket])

  useEffect(() => {
    getTickets("latest").then(res => {
      setTickets(res.latest)
    })
  }, [])

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0,3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, margintop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3,13)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta">{item.escritorio}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
