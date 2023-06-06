import ProductContext from '@/contexts/Product'
import { ProductTypes } from '@/typings'
import React from 'react'
import Product from './reusables/Product';
import mediaQuery from '@/utils/mediaquery';
import {Pagination} from '@mui/material'
import {SwiperSlide} from 'swiper/react'
import Slides from './reusables/Slides';

const Products = () => {
  const { products } = React.useContext(ProductContext);
  const isAboveSM = mediaQuery("(min-width: 640px)");
  const [page, setPage] = React.useState<number>(1);
  console.log(isAboveSM);
  return (
    <>
      <section className='py-20 w-full flex flex-col gap-y-4  justify-center'>
                <div className='flex flex-col w-full h-full'>
                    <p className='text-lg text-secondary font-semibold'>Encontre de tudo</p>
                    <p className='text-5xl text-primary font-semibold font-titleFont'>Dê uma olhada no que há de melhor</p>
                </div>
                {isAboveSM ? (
                    <div>
                        <div className='w-full flex flex-col h-full justify-center gap-y-4'>
                            <div className='min-h-[2000px] h-auto sm:min-h-[800px]'>
                                <div className='gap-2 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full place-items-start'>
                                    {products.slice((page - 1) * 10, (page - 1) * 10 + 10).map((product: ProductTypes) => {
                                        return (
                                            <Product product={product} key={product.id} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Pagination
                            count={Math.ceil(products.length / 10)}
                            onChange={(_, value) => {
                                setPage(value);
                            }}
                            shape='rounded'
                            className='w-full flex justify-center'
                        />
                    </div>
                ) : (
                    <Slides classes={'w-full h-auto py-4'}>
                        {products.map((product: ProductTypes) => {
                            return (
                                <SwiperSlide key={product.id}>
                                    <Product product={product} />
                                </SwiperSlide>
                            )
                        })}
                    </Slides>
                )}
            </section>
    </>
  )
}

export default Products