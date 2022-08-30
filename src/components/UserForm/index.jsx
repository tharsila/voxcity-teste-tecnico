import React, {useState} from 'react'
import './styles.css'

const UserForm = ({btnText}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form /* onSubmit={handleTask} */>
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
        <span>Email</span>
        <input 
          type="email" 
          placeholder='Email do usuário'
          value={email}
          onChange={((e) => setEmail(e.target.value))}
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