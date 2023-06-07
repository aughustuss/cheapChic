import CartContext from '@/contexts/Cart';
import { ProductTypes } from '@/typings';
import { Button } from '@mui/material';
import Link from 'next/link'
import React from 'react'
import { IoMdTrash } from 'react-icons/io';
interface CartItemProductProps {
    product: ProductTypes;
}
const Cartitem = ({product}: CartItemProductProps) => {
    const {id, image, title, price} = product;
    const {removeFromCart, increase, itemAmount, decrease} = React.useContext(CartContext);
    return (
        <>
            <div className='flex border-b border-neutral-200 p-4'>
                <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                    <Link href={`/product/${id}`}>
                        <img className=' max-w-[80px]' src={image} alt={title} />
                    </Link>
                    <div className='w-full flex flex-col'>
                        <div className='flex justify-between mb-2 items-center'>
                            <Link className='uppercase text-sm max-w-[240px]' href={`/product/${id}`} >{title}</Link>
                            <div onClick={() => removeFromCart(id)} title='Remover itens' className='text-xl cursor-pointer text-neutral-700 hover:text-neutral-900 transition duration-300'>
                                <IoMdTrash />
                            </div>
                        </div>
                        <div className='text-xs flex w-full justify-between items-center '>
                            <div className='flex w-fit gap-x-3 items-center border border-neutral-200' >
                                <Button onClick={() => increase(id)} className='w-6'>+</Button>
                                {itemAmount}
                                <Button onClick={() => decrease(id)} className='w-6'>-</Button>
                            </div>
                            <div>{itemAmount > 1 ? `R$${price * itemAmount}` : `R$${price}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartitem