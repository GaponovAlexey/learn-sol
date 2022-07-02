import { ethers } from 'ethers'
import type { NextPage } from 'next'
const Home: NextPage = ({library}:any) => {
  // const balanse = library('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 ')
  // console.log(balanse)
  const data = getLibrary.apply()
  console.log(data)
  
  return (
    <div>
      <h1>Balance ETH</h1>
    </div>
  )
}

export default Home

// function getLibrary(provider: any): ethers.providers.Web3Provider {
//   const library = new ethers.providers.Web3Provider(provider, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
//   library.pollingInterval = 12000

//   return library
// }
