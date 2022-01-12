import React, { createContext, useState } from 'react'

export const UIContext = createContext()

export const UIProvider = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(true)
    }

    const hiddeMenu = () => {
        setShowMenu(false)
    }

    return (
        <UIContext.Provider value={{showMenu, show, hiddeMenu}} >
            {children}
        </UIContext.Provider>
    )
}
