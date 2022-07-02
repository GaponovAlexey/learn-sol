import { info } from 'console'
import { ethers } from 'ethers'
const Main = async () => {

  let provider = new ethers.providers.Web3Provider(window.ethereum)
  const provider = await getProviderOrSigner();
  await provider.send('eth_requestAccounts', [])

  const signer = provider.getSigner()
  return <div>sol</div>
}

export default Main
