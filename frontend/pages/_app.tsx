import { CartContextProvider } from '@/contexts/Cart'
import { CartMenuProvider } from '@/contexts/Cartmenu'
import { ProductProvider } from '@/contexts/Product'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <CartContextProvider>
        <CartMenuProvider>
          <Component {...pageProps} />
        </CartMenuProvider>
      </CartContextProvider>
    </ProductProvider>
  )
}
