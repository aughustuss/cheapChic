import Header from '@/components/Header';
import Product from '@/components/reusables/Product';
import Slides from '@/components/reusables/Slides';
import ProductContext from '@/contexts/Product'
import { ProductTypes } from '@/typings'
import { theme } from '@/utils/theme';
import { Button, Rating, ThemeProvider } from '@mui/material';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { HiShoppingCart } from 'react-icons/hi';
import { SwiperSlide } from 'swiper/react';

interface ProductProps {
    product: ProductTypes;
    products: ProductTypes[];
}

const ProductDetails = ({ product, products }: ProductProps) => {
    const { title, price, category, description, image, rating } = product;
    const filteredProducts = products?.filter((item) => {
        return item.category.toLowerCase() === category.toLowerCase() && item.id !== product.id;
    });
    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <section className='container mx-auto pb-6 md:pt-32 pt-32 h-fit flex flex-col items-center gap-y-2 text-gray font-body' >
                    <div className='rounded-md bg-white p-2 shadow-md min-h-[600px] max-h-fit w-full flex flex-col justify-between ' >
                        <div className='flex flex-col lg:flex-row gap-4 w-full items-center justify-center '>
                            <div className='flex flex-1 max-w-sm mb-8 lg:mb-0 '>
                                <img className='w-full h-full self-start ' src={image} alt={title} />
                            </div>
                            <div className='flex flex-col p-2 gap-y-4 w-full flex-1 items-start h-full justify-center bg-quartiary rounded-md shadow-md md:min-h-[500px]'>
                                <div className='flex flex-col items-start text-left'>
                                    <h1 className='font-semibold mb-2 max-w-[450px] mx-auto self-start'>{title}</h1>
                                </div>
                                <div className='text-xl text-secondary font-bold'>
                                    R${price}
                                </div>
                                <p className='capitalize text-xs' >{category}</p>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <Rating value={rating.rate} precision={0.1} readOnly />
                                    <p className='text-xs'> <span className='text-sm'>{rating.rate}</span>  ({rating.count} Avaliações)</p>
                                </div>
                                <div className='mt-4 text-xs md:text-sm'>{description}</div>
                                <Button variant='contained' className='flex flex-row items-center gap-x-1 w-full bg-primary' >
                                    Adicionar ao carrinho <HiShoppingCart className='text-lg' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 w-full '>
                        <div className='w-full flex flex-col'>
                            <p className='text-lg text-secondary font-semibold'>Aproveite também</p>
                            <p className='text-5xl text-primary font-semibold font-title'>Você pode gostar</p>
                        </div>
                        <Slides classes={'w-full py-4'}>
                            {filteredProducts?.map((product: ProductTypes) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <Product product={product} />
                                    </SwiperSlide>
                                )
                            })}
                        </Slides>

                    </div>
                </section>
            </ThemeProvider>
        </>
    )
}

export default ProductDetails

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const products: Array<ProductTypes> = res.data;
    const paths = products.map((product) => ({
        params: {
            id: product.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id;
    const singleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const allProducts = await axios.get(`https://fakestoreapi.com/products`);
    const product: ProductTypes = singleProduct.data;
    const products: ProductTypes = allProducts.data;

    return {
        props: {
            product,
            products,
        }
    }
}