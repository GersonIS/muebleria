const type = {
    tipo1: "open",
    tipo2: "close"
}

export const UiReducer = (state, action) => {
    switch (action.type) {
        case type.tipo1:
            return {
                ...state,
                sidemenuOpen: true
            }
        case type.tipo2:
            return {
                ...state,
                sidemenuOpen: false
            }
        default:
            return state;
    }
}