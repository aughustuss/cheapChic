import { CartMenuContextType } from '@/typings';
import React from 'react'
interface CartMenuProps {
    children: React.ReactNode;
}
const CartMenuContext = React.createContext<CartMenuContextType>({
    isOpen: false,
    setIsOpen: () => { },
    handleIsOpen: () => { },
});

const CartMenuProvider: React.FC<CartMenuProps> = ({ children }) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <CartMenuContext.Provider value={{
            isOpen,
            setIsOpen,
            handleIsOpen,
        }}>
            {children}
        </CartMenuContext.Provider>
    )
}

export default CartMenuContext;
export {CartMenuProvider};