import Header from '@/components/Header';
import Product from '@/components/reusables/Product';
import ProductContext from '@/contexts/Product';
import { CategoriesTitleType, CategoriesTypes } from '@/typings';
import { Categories, CategoriesTitle } from '@/utils/data';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
interface CategoriesProps {
    categories: CategoriesTitleType;
}

const Category = ({ categories }: CategoriesProps) => {
    const { products } = React.useContext(ProductContext);
    const {title} = categories;
    const filteredProduct = products.filter((product) => {
        return product.category.toLowerCase() === title.toLowerCase();
    });
    return (
        <>
            <Header />
            <section className='pb-4 md:pt-32 pt-20 w-full container mx-auto px-4 md:px-0' >
                <div className='flex p-1 w-full h-[900px] border-gray rounded-md '>
                    <div className='w-full flex flex-col gap-y-4 h-full '>
                        <div className='uppercase text-xl lg:text-3xl font-semibold py-2 bg-primary w-full text-white px-2 rounded-md flex flex-row gap-x-2' >
                            <p className='font-bodyFont'>{title}</p>
                            <p className='text-[10px] self-end text-white normal-case'>{filteredProduct.length} produtos encontrados </p>
                        </div>
                        <div className='grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full h-auto overflow-y-auto overflow-x-hidden pb-4 '>
                            {filteredProduct.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <Product product={item} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = CategoriesTitle.map((cat: CategoriesTitleType) => ({
        params: {
            category: cat.title.toLowerCase(),
        }
    }));
    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const category = params?.category;
    const categories = CategoriesTitle.find((cat) => cat.title.toLowerCase() === category);

    if (!categories) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            categories,
        },
    };
};
