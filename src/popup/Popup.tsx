import { useEffect, useState } from 'react'

import './Popup.css'
import {
  generateRFC,
  generateCPF,
  generateCnpj,
  generateRUT,
  generateRFC_PF,
  saveGenerated,
  getListGenerated,
} from '../core'

export const Popup = () => {
  const [result, setResult] = useState('')
  const [listSaved, setListSaved] = useState<string[]>([])

  useEffect(() => {
    if (result) {
      navigator.clipboard.writeText(result).then(() => {
        // success
      })
      saveGenerated(result)
    }
    async function handleStorage() {
      setListSaved(await getListGenerated())
    }
    handleStorage()
  }, [result])

  return (
    <main className="container">
      <div>
        <h3>Gerador de documentos</h3>
        <div>
          <div className="country">Brasil</div>
          <div className="options">
            <button
              onClick={() => {
                setResult(generateCnpj())
              }}
            >
              CNPJ
            </button>
            <button
              onClick={() => {
                setResult(generateCPF())
              }}
            >
              CPF
            </button>
          </div>
          <div className="country">Chile</div>
          <div className="options">
            <div>
              <button
                onClick={() => {
                  setResult(generateRUT())
                }}
              >
                RUT
              </button>
            </div>
          </div>
          <div className="country">México</div>
          <div className="options">
            <button
              onClick={() => {
                setResult(generateRFC())
              }}
            >
              RFC PJ
            </button>
            <button
              onClick={() => {
                setResult(generateRFC_PF())
              }}
            >
              RFC PF
            </button>
          </div>
        </div>
        <div className="result">
          <input value={result} placeholder="Selecione uma opção" />
        </div>
      </div>
      <div>
        <h3>Últimos documentos gerados</h3>
        <div className="last-generated">
          <ol reversed>
            {listSaved && listSaved.map((item) => <li key="item">{item}</li>)}
            {!listSaved && <li>Nenhum documento gerado ainda...</li>}
          </ol>
        </div>
      </div>
    </main>
  )
}

export default Popup
