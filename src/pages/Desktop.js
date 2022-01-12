import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import { useHideMenu } from "../hooks/useHideMenu";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { getUserStorage } from "../helpers/gerUserStorage";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

export const Desktop = () => {
  const navigate = useNavigate();
  const [usuario] = useState(getUserStorage());
  const { socket } = useContext(SocketContext);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    if (!usuario.agente || !usuario.escritorio) {
      navigate("/ingresar");
    }
  }, []);

  const salir = () => {
    localStorage.clear();
    navigate("/ingresar");
  };

  const nextTicket = () => {
    socket.emit("siguiente-ticket", usuario, (ticket) => {
      setTicketData(ticket);
    });
  };

  useHideMenu(false);

  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio número: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>

        <Col span={4}>
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider></Divider>
      {ticketData ? (
        <Row>
          <Col>
            <Text>Estó atendiendo el ticket número: </Text>
            <Text type="danger" style={{ fontSize: 20 }}>
              {ticketData.number}
            </Text>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Text style={{fontSize: 20}} type="danger">No hay tickets nuevos</Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button type="primary" shape="round" onClick={nextTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
