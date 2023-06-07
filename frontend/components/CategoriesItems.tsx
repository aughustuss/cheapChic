import { Categories } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const CategoriesItems = () => {
    return (
        <>
            <section className='w-full flex flex-col gap-y-4'>
                <div className='flex flex-col w-full h-full'>
                    <p className='text-lg text-tertiary font-semibold'>Veja mais</p>
                    <p className='text-5xl text-primary font-semibold font-titleFont'>Navegue por nossas categorias</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 place-items-center w-full gap-2'>
                    {Categories.map((category) => (
                        <Link href={`/category/${(category.title).toLowerCase()}`} key={category.id} className='w-full hover:scale-105 transition duration-200'>
                            <div className='flex flex-col justify-center items-center bg-quartiary rounded-md h-[160px]'>
                                <p className='text-4xl md:text-5xl text-primary'><category.icon /></p>
                                <p>{category.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CategoriesItems