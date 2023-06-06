import ProductContext from '@/contexts/Product';
import { Categories } from '@/utils/data';
import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { MdArrowForward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'


const Header = () => {
    const [search, setSearch] = React.useState<string>('');
    const [isMenuOpen, setisMenuOpen] = React.useState<boolean>(false);
    const [searchDiv, setSearchDiv] = React.useState<boolean>(false);
    const [listOpen, setListOpen] = React.useState<boolean>(false);

    const { products } = React.useContext(ProductContext);
    const filteredSearch = search.length > 0 ? products.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    }) : [];
    return (
        <>
            <header className='text-black bg-primary transition-all lg:py-2 duration-300 fixed shadow-md flex flex-col items-center w-full z-40 text-sm' >
                <div className='mx-auto w-full md:w-5/6 flex flex-row justify-evenly items-center '>
                    <div onClick={() => setisMenuOpen(!isMenuOpen)} className='flex md:hidden p-0 m-0 cursor-pointer w-[40px] md:w-[60px] justify-center'>
                        <AiOutlineMenu size={20} />
                    </div>
                    <Link href='/' className='text-lg md:text-2xl font-title font-bold flex pb-2 md:pb-0 flex-col justify-center items-center gap-y-[2px]' >
                        AD Shop For You
                        <span className='uppercase text-[8px] md:text-xs border border-black lg:py-1 py-0 w-full text-center tracking-[2px] md:tracking-[3px]'>E-commerce Store</span>
                    </Link>
                    <div className='hidden md:flex flex-row gap-x-4 md:w-2/4'>
                        <div className='flex items-center w-full flex-row relative'>
                            <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Digite sua busca...' className='bg-slate-200 pl-2 py-2 hidden md:flex w-full h-full outline-none text-neutral-600 rounded-md' />
                            <span className='flex md:absolute right-4 text-xl text-neutral-600'>{search.length > 0 ? <CgClose className='cursor-pointer' onClick={() => setSearch('')} /> : <HiOutlineSearch />}</span>
                            <div className='bg-white z-40 w-full absolute top-full max-h-96 overflow-auto overflow-y-scroll shadow-md'>
                                {search.length > 0 ? (
                                    filteredSearch.map((item) => {
                                        return (
                                            <Link key={item.id} onClick={() => setSearch('')} href={`product/${item.id}`} className=' w-full h-fit md:h-[60px] border border-slate-200 mx-2 rounded-md p-2 mb-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                                                <div className='h-full flex w-full flex-col md:flex-row text-xs items-center text-gray uppercase gap-x-2' >
                                                    <img alt='Imagem Produto' className='md:h-full h-16 w-16 md:w-[40px]' src={item.image} />
                                                    <div className='flex flex-col w-full'>
                                                        <div className='text-[8px] md:flex lg:text-[12px] '>
                                                            {item.title}
                                                        </div>
                                                        <div className='sm:text-[6px] md:flex md:text-[6px] lg:text-[10px] hidden'>
                                                            {item.category}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hidden sm:block text-neutral-600'>
                                                    <MdArrowForward className='opacity-0 group-hover:opacity-100 transition duration-300' />
                                                </div>
                                            </Link>

                                        )
                                    })
                                ) : (
                                    null
                                )}
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row gap-x-2 md:hidden items-center max-w-[60px] justify-center h-1/3 w-full'>
                        <div className='cursor-pointer'>
                            {!searchDiv ? (
                                <HiOutlineSearch size={18} onClick={() => setSearchDiv(!searchDiv)} />
                            ) : (
                                <div className='top-0 absolute bg-white h-full w-full left-0 z-20 flex justify-center'>
                                    <div className='w-full items-center justify-center h-full relative'>
                                        <div className='w-5/6 mx-auto flex flex-row items-center justify-between h-full gap-x-4' >
                                            <input placeholder='Digite sua busca...' className='rounded-md py-2 w-full outline-none text-gray bg-slate-200' onChange={(e) => setSearch(e.target.value)} value={search} />
                                            <span><CgClose color='black' onClick={() => { setSearchDiv(!searchDiv); setSearch('') }} size={20} /></span>
                                        </div>
                                        <div className='bg-white z-40 w-full absolute top-full max-h-96 overflow-auto overflow-y-scroll shadow-md'>
                                            {search.length > 0 ? (
                                                filteredSearch.map((item) => {
                                                    return (
                                                        <Link key={item.id} onClick={() => setSearch('')} href='/' className='h-fit md:h-[60px] mx-2 border border-slate-200 rounded-md mb-2 p-2 cursor-pointer transition duration-300 group flex flex-row items-center justify-between'>
                                                            <div className='h-full flex w-full flex-col md:flex-row text-xs items-center text-neutral-600 uppercase gap-x-2' >
                                                                <img alt='Imagem Produto' className='md:h-full h-16 w-16 md:w-[40px]' src={item.image} />
                                                                <div className='flex flex-col w-full'>
                                                                    <div className='text-[8px] md:flex lg:text-[12px] '>
                                                                        {item.title}
                                                                    </div>
                                                                    <div className='sm:text-[6px] md:flex md:text-[6px] lg:text-[10px] hidden'>
                                                                        {item.category}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='hidden sm:block text-neutral-600'>
                                                                <MdArrowForward className='opacity-0 group-hover:opacity-100 transition duration-300' />
                                                            </div>
                                                        </Link>
                                                    )
                                                })
                                            ) : (
                                                null
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                <div className='hidden md:flex w-5/6 flex-row md:justify-center'>
                    <div className='flex w-full md:w-1/2'>
                        <div className=' transition duration-300  cursor-pointer  w-full md:text-center relative group flex flex-row items-center md:justify-center justify-start'>
                            <div onClick={() => setListOpen(!listOpen)} className='flex flex-row items-center w-full'>
                                <div className='flex-grow' >
                                    Categorias</div>
                                <div className=' flex-shrink-0 opacity-0 group-hover:opacity-100 transition duration-300 text-2xl self-end'>
                                    {!listOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                                </div>
                            </div>
                            {listOpen ? (
                                <ul className='text-gray bg-white capitalize absolute top-full w-full p-2 rounded-b-md' >
                                    {Categories.map((item) => {
                                        return (
                                            <li key={item.id} className='hover:text-white hover:bg-primary text-sm md:text-md flex transition duration-500'>
                                                <Link className='w-full h-full p-2 ' href='/'> {item.title} </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                null
                            )}
                        </div>
                        <Link href='/' className='cursor-pointer w-full flex py-2 justify-end md:justify-center  transition duration-300'>
                            Contato
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header