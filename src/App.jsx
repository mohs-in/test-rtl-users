import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {

  const [ users, setUsers ] = React.useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user])
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </>
  )
}

export default App
