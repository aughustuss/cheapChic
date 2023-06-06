import { StaticImageData } from "next/image";
import React from "react";

export interface ProductTypes {
    category: string;
    description: string;
    id: number;
    image: string | undefined;
    price: number;
    rating: {
        count: number;
        rate: number;
    },
    title: string;
};

export interface ProductContextTypes {
    products: Array<ProductTypes>;
};

export interface CategoriesTypes {
    id: number,
    title: string;
    slug: string;
};

export interface SlidesTypes {
    children: React.ReactNode;
    classNames: string;
}