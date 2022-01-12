import { useContext, useEffect } from "react"
import { UIContext } from "../context/UIContext"

export const useHideMenu = (hide) => {
    const { show, hiddeMenu } = useContext(UIContext)

    useEffect(() => {
        if(hide){
            hiddeMenu()
            console.log("oculto");
        }else{
            show()
        }
    }, [hide, hiddeMenu, show])
}
