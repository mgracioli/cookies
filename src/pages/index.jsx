import React, { useState } from 'react'
import { parseCookies, setCookie } from 'nookies'

//Client-only Cookies
export default function Home() {
  const [cnpj, setCnpj] = useState('')
  
  const cookies = parseCookies()
  console.log(cookies.cnpj)
  
  const pegaCNPJ = (evt) => {
    setCnpj(evt.target.value)
  }

  const acessar = () => {
    setCookie(null, 'cnpj', cnpj, {
      maxAge: 86400 * 7,
      path: '/'
    })
  }

  return (
    <div>
      <label>CNPJ</label>
      <br></br>
      <input onChange={pegaCNPJ}></input>
      <br></br>
      <button onClick={acessar}>Acessar</button>
    </div>
  )
}


//ServerSide cookies - cria cookie no cliente (para caso for utilizar server-side-rendering)
// export default function Home({msg, cooki}) {
//   const cnpj = '11111111111111'

//   const acessar = () => {
//     setCookie(null, 'cnpj', cnpj, {
//       maxAge: 86400 * 7,
//       path: '/'
//     })
//   }

//   return (
//     <div>
//       <h2>Mensagem: {msg}</h2>
//       <h2>cookie armazenado: {cooki}</h2>
//       <button onClick={acessar}>Acessar</button>
//     </div>
//   )
// }

// export async function getServerSideProps(context){
//   const cookies = parseCookies(context)

//   console.log('cookie no servidor: ', cookies)

//   return{
//     props:{
//       msg: 'mensagem pre renderizada no servidor',
//       cooki: cookies.cnpj ?? 'ainda nao foi setado um cookie'
//     }
//   }
// }