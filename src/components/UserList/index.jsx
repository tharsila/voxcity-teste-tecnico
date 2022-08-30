import React from 'react'
import './styles.css'

const UserList = ({userList, deleteUser, editUser}) => {
  return (
    <>
      {userList.length > 0 ? (
        userList.map((user) => (
          <div className="userContainer">
            <div className="userInfo">
              <h3>{user.name}</h3>
              <p>Cpf: {user.cpf}</p>
              <p>Senha: {user.password}</p>
            </div>
            <div className="userActions">
              <span onClick={() => editUser(user)}>Editar</span>
              <span onClick={() => deleteUser(user.id)}>Deletar</span>
            </div>
          </div>
        ))
      ) 
      : (
        <h4>Não há usuarios</h4>
      )
      }
    </>
  )
}

export default UserList