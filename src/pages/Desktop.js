import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import React from 'react'

const { Title, Text } = Typography

export const Desktop = () => {


    const salir = () => {
        console.log("salir");
    }

    const nextTicket = () => {
        console.log("siguiente");
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title>Oscar</Title>
                    <Text>Usted está trabajando en el escritorio número: </Text>
                    <Text type="success" >3</Text>
                </Col>

                <Col span={4} > 
                    <Button
                        shape="round"
                        type="danger"
                        onClick={salir}
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>
            <Divider></Divider>
            <Row>
                <Col>
                    <Text>Estó atendiendo el ticket número: </Text>
                    <Text type="danger" style={{fontSize: 20}} >15</Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        type="primary"
                        shape="round"
                        onClick={nextTicket}
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}
