import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import axios from 'axios';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error(error));
  };

  const handleSave = (user) => {
    if (user.id) {
      // Update existing user
      axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
        .then(response => {
          setUsers(users.map(u => (u.id === user.id ? response.data : u)));
          setCurrentUser(null);
        })
        .catch(error => console.error(error));
    } else {
      // Create new user
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(response => {
          setUsers([...users, response.data]);
          setCurrentUser(null);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserForm currentUser={currentUser} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
