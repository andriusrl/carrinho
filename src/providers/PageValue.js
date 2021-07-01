
import React, { useState } from "react";

export const PageContext = React.createContext({});

export const PageProvider = (props) => {
    const [pageValue, setPageValue] = useState({
        page: "Main",
        cart: null
    })

    return (
        <PageContext.Provider value={{ pageValue, setPageValue }}>
            {props.children}
        </PageContext.Provider>
    )
}

export const PageValue = () => React.useContext(PageContext)