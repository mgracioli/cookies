import React from "react"
import { parseCookies, setCookie } from 'nookies'

export default function Produto() {
    const cnpj = '11111111111111'
  
    const acessar = () => {
      setCookie(null, 'cnpj', cnpj, {
        maxAge: 86400 * 7,
        path: '/'
      })
    }
  
    const cookies = parseCookies()
    console.log('cookie no cliente: ', cookies.cnpj)
  
    return (
      <div>
        <h2>cookie armazenado: {cookies.cnpj}</h2>
        <button onClick={acessar}>Acessar</button>
      </div>
    )
  }