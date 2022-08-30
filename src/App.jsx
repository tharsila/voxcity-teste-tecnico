import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  
  return (
    <>
      <main>
        <div>
          <h2>Cadastre um Novo Usuário</h2>
          <UserForm btnText='Criar'/>
        </div>
        <div>
          <h2>Lista de Usuários:</h2>
          <UserList/>
        </div>
      </main>
    </>
  )
}

export default App
