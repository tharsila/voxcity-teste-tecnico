import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const deleteUser = (id) => {
    setUserList(
      userList.filter(user => {
        return user.id !== id
      })
    )
  } 

  return (
    <>
      <main>
        <div>
          <h2>Cadastre um Novo Usuário</h2>
          <UserForm btnText='Criar' userList={userList} setUserList={setUserList} />
        </div>
        <div>
          <h2>Lista de Usuários:</h2>
          <UserList userList={userList} deleteUser={deleteUser}/>
        </div>
      </main>
    </>
  )
}

export default App
