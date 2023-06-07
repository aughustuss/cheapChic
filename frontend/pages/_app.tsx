import { CartContextProvider } from '@/contexts/Cart'
import { ProductProvider } from '@/contexts/Product'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ProductProvider>
  )
}
