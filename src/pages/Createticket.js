import { DownCircleOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { SocketContext } from '../context/SocketContext'
import { useHideMenu } from '../hooks/useHideMenu'

const { Title, Text } = Typography

export const Createticket = () => {
    useHideMenu(true);
    const {socket} = useContext(SocketContext)
    const [ticketData, setTicketData] = useState(null)

    const newTicket = () => {
        socket.emit("solicitar-ticket", null, (ticket) => {
            setTicketData(ticket)
        })
    }

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title>Presione el botón para un nuevo ticket</Title>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<DownCircleOutlined/>}
                        size="large"
                        onClick={newTicket}
                    >
                        Nuevo ticket
                    </Button>
                </Col>
            </Row>
            {
                ticketData &&
                <Row style={{marginTop: 100}}>
                    <Col span={14} offset={6} align="center">
                        <Text level={2} >
                            Su número
                        </Text>
                        <br/>
                        <Text type="success" style={{fontSize: 50}} >
                            {ticketData.number}
                        </Text>
                    </Col>
                </Row>
            }
        </>
    )
}
