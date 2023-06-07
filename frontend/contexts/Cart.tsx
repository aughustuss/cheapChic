import { CartContextType, ProductTypes } from '@/typings';
import React from 'react'
interface CartProps {
    children: React.ReactNode;
}
export const CartContext = React.createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    increase: () => { },
    decrease: () => { },
    itemAmount: 0,
    totalPrice: 0,
});

const CartContextProvider: React.FC<CartProps> = ({ children }) => {
    const [cart, setCart] = React.useState<ProductTypes[]>([]);
    const [itemAmount, setItemAmount] = React.useState<number>(0);
    const [totalPrice, setTotalPrice] = React.useState<number>(0);
    React.useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotalPrice(total);
    })

    React.useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        };
    }, [cart])

    const addToCart = (product: ProductTypes, id: number) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };
    const removeFromCart = (id: number) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const increase = (id: number) => {
        const cartItem = cart?.find((item) => {
            item?.id === id;
        });
        if (cartItem) {
            addToCart(cartItem, id);
        }
    }

    const decrease = (id: number) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        if (cartItem && cartItem.amount < 2) {
            removeFromCart(id);
        }

    };
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increase,
            decrease,
            itemAmount,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartContextProvider}