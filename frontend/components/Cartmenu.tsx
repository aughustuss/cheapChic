import CartContext from '@/contexts/Cart'
import CartMenuContext from '@/contexts/Cartmenu'
import { ProductTypes } from '@/typings'
import { theme } from '@/utils/theme'
import { Button, ThemeProvider } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import Cartitem from './reusables/Cartitem'

const Cartmenu = () => {
    const { isOpen, setIsOpen, handleIsOpen } = React.useContext(CartMenuContext);
    console.log(isOpen);
    const { cart, itemAmount, totalPrice } = React.useContext(CartContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={`${isOpen ? 'right-0 shadow-2xl' : '-right-full'} text-gray w-full shadow-current bg-white fixed top-0 h-full md:w-1/3 xl:max-w-1/3 transition-all duration-300 z-50 px-4 lg:px-8 flex flex-col justify-between pb-2`}>
                    <div className='flex items-center py-4 justify-between border-b border-b-neutral-200 w-full'>
                        <div className='font-semibold text-sm ' >
                            Carrinho de Compras ({itemAmount})
                        </div>
                        <div
                            className='cursor-pointer w-8 h-8 flex justify-center items-center text-2xl'
                            onClick={handleIsOpen}>
                            <IoMdArrowForward />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-2 h-[400px] sm:h-[520px] overflow-x-hidden overflow-auto '>
                        {cart.map((product: ProductTypes) => (
                            <Cartitem product={product} key={product.id} />
                        )
                        )}
                    </div>
                    <div className='w-full'>
                        <div>
                            <span className='font-semibold text-sm'>Total: <span className='text-secondary'>R$</span> {totalPrice.toFixed(2)}</span>
                        </div>
                        <Link href='/cartpage' className='cursor-pointer py-4 flex flex-row w-full' >
                            <Button variant='contained' className=' w-full flex flex-row' >
                                <p className='uppercase text-sm'>Visualizar carrinho</p> <FaShoppingCart className='text-xl absolute right-1 lg:right-5' />
                            </Button>
                        </Link>
                        <div className='w-full'>
                            <Button className='w-full' variant='outlined'>
                                Checkout
                            </Button >
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Cartmenu