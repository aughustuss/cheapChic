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

export interface UfTypes {
    uf: string;
};

export interface SexType {
    sex: string;
}

export interface SlidesTypes {
    children: React.ReactNode;
    classNames: string;
};

export interface ButtonProps {
    children: React.ReactNode;
    variant: OverridableStringUnion | undefined;
    classes: string;
};

export interface TextFieldProps {
    label: string;
    helper: React.ReactNode;
    classes: string;
    type: React.InputHTMLAttributes<unknown>['type'];
}

export interface SwiperProps {
    children: React.ReactNode;
    classes: string;
};

export interface LoginFormData {
    email: string;
    password: string;
};

export interface RegisterFormData {
    name: string;
    lastname: string;
    email: string;
    cpf: string;
    tel: string;
    cep: string;
    city: string;
    adress: string;
    number: number;
    uf: string;
    sex: string;
    birthdate: string;
    password: string;
    confirmpassword: string;
}