import { ProductContextTypes, ProductTypes } from '@/typings';
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

interface ProductProps {
    children: React.ReactNode
}

export const ProductContext = createContext<ProductContextTypes>({
    products: [],
});

const ProductProvider: React.FC<ProductProps> = ({children}) => {
    const [products, setProducts] = useState<ProductTypes[]>([]);

    const getProducts = async () => {
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res)
            setProducts(res.data);
        } catch(err){
            console.log(err);
        };
    };
    useEffect(() => {getProducts()}, []);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext
export {ProductProvider}