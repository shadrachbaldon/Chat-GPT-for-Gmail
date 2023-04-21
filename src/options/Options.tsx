import { useEffect } from 'preact/hooks'
import './styles.css'
import ProviderSelect from './ProviderSelect'



function Options() {
  useEffect(() => {
    
  }, [])

  return (
    <ul>
      <div class="logo">
        <img src="../logo_128.png" />
        <h1 data-message="extension_name">HelloWalle</h1>
      </div>
      <hr></hr>
      <h1 data-message="extension_name" style="text-align:center">AI Provider</h1>
      <ProviderSelect />
    </ul>
  )
}

export default Options


