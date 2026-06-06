'use client';

import { useState } from 'react';
const catNames = ['Luna', 'Bella', 'Lucy', 'Daisy', 'Max', 'Charlie', 'Buddy', 'Rocky', 'Tiger', 'Jasper'];
console.log(catNames);
const Cat = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>
    </div>
  );
};

export default Cat;
