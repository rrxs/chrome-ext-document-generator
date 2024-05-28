import { useState } from 'react'

import './Popup.css'
import { generateRFC, generateCPF, generateCnpj, generateRUT } from '../core'

export const Popup = () => {
  const [result, setResult] = useState('selecione uma opção')

  return (
    <main>
      <h3>Monkey Document Generator</h3>
      <div>
        <div><button onClick={() => {setResult(generateCnpj())}}>Gerar CNPJ</button></div>
        <div><button onClick={() => {setResult(generateCPF())}}>Gerar CPF</button></div>
        <div><button onClick={() => {setResult(generateRUT())}}>Gerar RUT</button></div>
        <div><button onClick={() => {setResult(generateRFC())}}>Gerar RFC PJ</button></div>
      </div>
      <div>
        Resultado: {result}
      </div>
    </main>
  )
}

export default Popup
