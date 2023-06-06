import { StaticImageData } from "next/image";
import React from "react";
import {OverridableStringUnion} from '@mui/types'

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
};

export interface ButtonProps {
    children: React.ReactNode;
    variant: OverridableStringUnion | undefined;
    classes: string;
};

export interface SwiperProps {
    children: React.ReactNode;
    classes: string;
}