import { createContext } from "react";

const MyContext = createContext([]);

const ValorProvider = ({children}) => {

    const [valor, setValor] = useState(0);
    const sharedState = { valor, setValor };

    return (
        <MyContext.Provider value={valor, sharedState}>
            {children}
        </MyContext.Provider>
    )
} 


export {ValorProvider, MyContext};