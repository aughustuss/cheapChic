import mediaQuery from '@/utils/mediaquery'
import React from 'react'

const Banner = () => {
    const isAboveSM = mediaQuery("(min-width: 640px)");
    return (
        <>
            <section>
                {isAboveSM ? (
                    <div  className='h-[440px] w-full bg-primary rounded-md' />
                ) : (
                    <div  className='h-[320px] w-full bg-primary rounded-md' />
                )}
            </section>
        </>
    )
}

export default Banner