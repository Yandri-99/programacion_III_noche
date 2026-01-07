import React from 'react';

interface IncrementButtonProps {
  onIncrement: () => void; 
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ onIncrement }) => {
  return <button onClick={onIncrement}>Sumar 1</button>;
};

export default IncrementButton;
