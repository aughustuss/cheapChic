import { CategoriesTitleType, CategoriesTypes, SexType, UfTypes } from "@/typings"
import { FaTshirt } from 'react-icons/fa'
import { GiLargeDress, GiBigDiamondRing } from 'react-icons/gi'
import { RiComputerFill } from 'react-icons/ri'
export const Categories: CategoriesTypes[] = [
    {
        id: 1,
        title: "Men's Clothing",
        icon: FaTshirt,
    },
    {
        id: 1,
        title: "Women's Clothing",
        icon: GiLargeDress,
    },
    {
        id: 1,
        title: "Jewelery",
        icon: GiBigDiamondRing,
    },
    {
        id: 1,
        title: "Electronics",
        icon: RiComputerFill,
    },
];

export const CategoriesTitle: CategoriesTitleType[] = [
    {
        title: "Men's Clothing",
    },
    {
        title: "Women's Clothing",
    },
    {
        title: "Jewelery",
    },
    {
        title: "Electronics",
    }
]

export const UFs: UfTypes[] = [
    {
        uf: "AC",
    },
    {
        uf: "AL",
    },
    {
        uf: "AP",
    },
    {
        uf: "AM",
    },
    {
        uf: "BA",
    },
    {
        uf: "CE",
    },

    {
        uf: "DF",
    },
    {
        uf: "ES",
    },
    {
        uf: "GO",
    },
    {
        uf: "MA",
    },
    {
        uf: "MT",
    },
    {
        uf: "MS",
    },
    {
        uf: "MG",
    },
    {
        uf: "PA",
    },
    {
        uf: "PB",
    },
    {
        uf: "PR",
    },
    {
        uf: "PE",
    },
    {
        uf: "PI",
    },
    {
        uf: "RJ",
    },
    {
        uf: "RN",
    },
    {
        uf: "RS",
    },
    {
        uf: "RO",
    },
    {
        uf: "RR",
    },
    {
        uf: "SC",
    },
    {
        uf: "SP",
    },
    {
        uf: "SE",
    },
    {
        uf: "TO",
    },
];

export const Sexies: SexType[] = [
    {
        sex: 'Masculino',
    },
    {
        sex: 'Feminino',
    },
]