import { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [userList, setUserList] = useState([])
  const [userUpdate, setUserUpdate] = useState(null)

  const deleteUser = (id) => {
    setUserList(
      userList.filter(user => {
        return user.id !== id
      })
    )
  }

  const editUser = (user) => {
    hideOrShowModal(true)
    setUserUpdate(user)
  }

  const updateUser = (id, name, cpf, password) => {
    const updateUser = {
      id,
      name,
      cpf,
      password
    }

    const updateItems = userList.map((user) => {
      return user.id === updateUser.id ? updateUser : user
    })

    setUserList(updateItems)
    hideOrShowModal(false)
  }

  const hideOrShowModal = (display) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal.classList.remove('hide')
    } else {
      modal.classList.add('hide')
    }
  }
  return (
    <>
      <Modal children={
        <UserForm btnText='Editar' 
          userList={userList} 
          userUpdate={userUpdate} 
          updateUser={updateUser}
        />}
      />
      <main>
        <div>
          <h2>Cadastre um Novo Usuário</h2>
          <UserForm 
            btnText='Criar' 
            userList={userList} 
            setUserList={setUserList}
          />
        </div>
        <div>
          <h2>Lista de Usuários:</h2>
          <UserList 
            userList={userList} 
            deleteUser={deleteUser} 
            editUser={editUser}
          />
        </div>
      </main>
    </>
  )
}

export default App
