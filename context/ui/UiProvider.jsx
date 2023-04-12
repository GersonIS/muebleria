import { useReducer } from "react"
import { UiContext, UiReducer } from "./"

const ui_initial_state = {
    sidemenuOpen: false
}

export const UiProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UiReducer, ui_initial_state);

    const openSideMenu = () => {
        dispatch({ type: "open" })
    }

    const closeSideMenu = () => {
        dispatch({ type: "close" })
    }

    return (
        <UiContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
            {children}
        </UiContext.Provider>
    )
}