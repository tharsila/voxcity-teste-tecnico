import React from 'react'
import './styles.css'

const UserList = ({userList}) => {
  return (
    <>
      {userList.length > 0 ? (
        userList.map((user, index) => (
          <div className="userContainer">
            <div className="userInfo">
              <h3>{user.name}</h3>
              <p>Cpf: {user.cpf}</p>
              <p>Senha: {user.password}</p>
            </div>
            <div className="userActions">
              <a href="">Editar</a>
              <a href="">Deletar</a>
            </div>
          </div>
        ))
      ) 
      : (
        <p>Não há usuarios</p>
      )
      }
    </>
  )
}

export default UserList