import React from 'react';
import IncrementButton from './IncrementButton';

const ParentIncrementButton: React.FC = () => {
    const [count, setCount] = React.useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <p>Count: {count}</p>
            <IncrementButton onIncrement={handleIncrement} />
        </div>
    );
};

export default ParentIncrementButton;