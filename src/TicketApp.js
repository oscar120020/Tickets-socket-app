import React from 'react'
import { SocketProvider } from './context/SocketContext'
import { UIProvider } from './context/UIContext'
import { RouterApp } from './pages/RouterApp'

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UIProvider>
                <RouterApp/>
            </UIProvider>
        </SocketProvider>
    )
}
