import React, {useState} from 'react'
import './styles.css'

const UserForm = ({btnText, userList, setUserList}) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (e) => {
    e.preventDefault();
   const newUser = [...userList]
   const id = Math.floor(Math.random() * 1000)

   newUser.push({
      id,
      name,
      cpf,
      password
   })

    setUserList(newUser)
    setName('')
    setCpf('')
    setPassword('')
    console.log(userList)
  }

  return (
    <form onSubmit={handleUser}>
    <div className="form-group">
      <label>
        <span>Nome</span>
        <input 
          type="text" 
          placeholder='Nome do usuário'
          value={name}
          onChange={((e) => setName(e.target.value))}
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        <span>CPF</span>
        <input 
          type="text" 
          placeholder='Cpf do usuário'
          value={cpf}
          onChange={((e) => setCpf(e.target.value))}
        />
      </label>
    </div>
    <div className="form-group">
      <label>
        <span>Senha</span>
        <input 
          type="password" 
          placeholder='Sehha do usuário'
          value={password}
          onChange={((e) => setPassword(e.target.value))}
        />
      </label>
    </div>
    <div className="btn">
      <input type="submit" value={btnText} />
    </div>
   </form>
  )
}

export default UserForm