import { createContext, useReducer } from "react"







const initialState = {

}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case "typeName":
        return { ...state, ...payload }

    default:
        return state
    }
}


const StoreContext = createContext(initialState)


export const StoreProvider = ({children}) =>{
     const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext value={[state, dispatch]} >
            {children}
        </StoreContext>
    )
}



export const useStore = ()=>{
     const context = useContext(StoreContext)

     return context

 }




