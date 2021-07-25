import React, { useState, useEffect } from 'react';
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png';
function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState('');
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('User');

  const getPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  const isPerson = person && person.image;

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
    e.preventDefault();
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={isPerson || defaultImage} alt="random user" className="user-img" />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button className="icon" data-label="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label="street" onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button className="icon" data-label="phone" onMouseOver={handleValue}>
              <FaPhone />
            </button>
            <button className="icon" data-label="password" onMouseOver={handleValue}>
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? 'loading...' : 'Random User'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
