import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import { ethers } from 'ethers'

function getLibrary(provider: any): ethers.providers.Web3Provider {
  const library = new ethers.providers.Web3Provider(provider, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
