import React from 'react'
import { UIProvider } from './context/UIContext'
import { RouterApp } from './pages/RouterApp'

export const TicketApp = () => {
    return (
        <UIProvider>
            <RouterApp/>
        </UIProvider>
    )
}
