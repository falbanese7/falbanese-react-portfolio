import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const greetings = [
  'Hello!', // English
  '¡Hola!', // Spanish
  'Bonjour!', // French
  'Hallo!', // German
  'Ciao!', // Italian
  'こんにちは', // Japanese
  '안녕하세요', // Korean
  '你好', // Chinese
];

const Welcome = () => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const handleClick = () => {
    setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  return (
    <Button
      variant="outline-dark"
      style={{
        cursor: 'pointer',
        fontSize: '40px',
        textAlign: 'center',
      }}
      onClick={handleClick}
    >
      {greetings[currentGreetingIndex]}
    </Button>
  );
};

export default Welcome;
