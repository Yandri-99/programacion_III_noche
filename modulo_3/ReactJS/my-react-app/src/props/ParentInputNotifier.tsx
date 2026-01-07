import React from 'react';
import InputNotifier from './InputNotifier';

const ParentInputNotifier: React.FC = () => {
  const handleTextChange = (text: string) => {
    console.log('Texto ingresado:', text);
  };

  return (
    <div>
      <h2>Parent Input Notifier</h2>
      <InputNotifier onChangeText={handleTextChange} />
    </div>
  );
};

export default ParentInputNotifier;