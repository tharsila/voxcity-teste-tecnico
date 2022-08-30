import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [userList, setUserList] = useState([])
  return (
    <>
      <main>
        <div>
          <h2>Cadastre um Novo Usuário</h2>
          <UserForm btnText='Criar' userList={userList} setUserList={setUserList} />
        </div>
        <div>
          <h2>Lista de Usuários:</h2>
          <UserList userList={userList}/>
        </div>
      </main>
    </>
  )
}

export default App
