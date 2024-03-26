import {createContext, useState} from "react";
// declare context to share info between components
export const ListItemsContext = createContext({
    items: {
        favorites: [],
        discarts: [],
        all: []
    },
    setItems: (val: any) => { console.log(val) }
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    // initial state
    const [items, setItems] = useState({
        favorites: [],
        discarts: [],
        all: []
    });
 
    return (
        <ListItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ListItemsContext.Provider>
    );
};