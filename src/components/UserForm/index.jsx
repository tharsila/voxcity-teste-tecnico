import React, {useState, useEffect} from 'react'
import './styles.css'

const UserForm = ({btnText, userList, setUserList, userUpdate, updateUser}) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  useEffect(() => {
    if(userUpdate) {
      setId(userUpdate.id);
      setName(userUpdate.name);
      setCpf(userUpdate.cpf);
      setPassword(userUpdate.password);
    }
  },[userUpdate])

  const handleUser = (e) => {
    e.preventDefault();
    
    if(!name || !cpf || !password) return;

    if (regex.test(cpf) || password.length <= 4) return alert("Cpf ou senha inválidos!");

    console.log(cpf);
    if(updateUser) {
      if(!name || !cpf || !password) return;
      updateUser(id, name, cpf, password)

    }else{
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
    }
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
          type="number" 
          placeholder='Cpf do usuário'
          value={cpf}
          onChange={((e) => setCpf(e.target.value)) }
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