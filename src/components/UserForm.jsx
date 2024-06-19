import React, { useState, useEffect } from 'react';

const UserForm = ({ currentUser, onSave }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
