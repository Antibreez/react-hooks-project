import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      github.search(value.trim())
    } else {
      show('Введите данные пользователя!')
    }
  }

  return (
    <div className="form-group mb-3">
      <input 
        type="text"
        className="form-control"
        placeholder="Введите имя пользователя..."
        value={value} 
        onKeyPress={onSubmit}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}